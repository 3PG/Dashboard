import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import marked from 'marked';
import { map } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {
  page: string;
  defaultPage = 'getting-started';

  get markdownPagePath$() {
    return this.route.paramMap.pipe(
      map(paramMap => {
        this.page = paramMap.get('page')?.toLowerCase();        
        return `assets/docs/${this.page}.md`;
    }));
  }

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router) {
    route.paramMap.subscribe(paramMap => {
      this.page = paramMap.get('page')?.toLowerCase();
      if (!this.page)
        router.navigate([`/docs/${this.defaultPage}`]);
    });
  }

  async ngOnInit() {
    this.convertToMarkdown();
  }

  convertToMarkdown() {
    this.markdownPagePath$.subscribe(async(path) => {
      try {
        const file = await fetch(path);
        const md = await file.text();
        
        document.getElementById('doc').innerHTML = 
          this.replaceDocVariables(
            marked(this.customMD(md), { breaks: true }));
        document.querySelector('h1').classList.add('display-4');
  
        if (window.location.hash)
          document.querySelector(window.location.hash)?.scrollIntoView();
  
        this.setAnchorReferences();
      } catch (e) { this.router.navigate(['/docs']); }
    });
  }

  replaceDocVariables(content: string) {
    return content
    .replace(/<BotUser>/g, `<a class="mention">@3PG#8166</a>`)
    .replace(/<Discord>/g, `<a href="${environment.discordURL}">3PG Discord</a>`)
    .replace(/<User>/g, `<a class="mention">@${this.userService.user?.tag ?? 'User#1234'}</a>`)
    .replace(/<PRO>/g, `<img class="pro-reference" src="assets/img/pro.png"></img>`);
  }

  customMD(content: string) {
    return content
      .replace(/\[!\] (.*)/gm, '<div class="alert alert-danger"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> $1</div>')
      .replace(/\[i\] (.*)/gm, '<div class="alert alert-info"><i class="fa fa fa-info-circle" aria-hidden="true"></i> $1</div>');
  }

  setAnchorReferences() {
    document.querySelectorAll('h1,h2,h3,h4,h5')
      .forEach((el: HTMLHeadingElement) => {
        el.setAttribute('title', 'Copy URL to clipboard.');
        el.onmousedown = () => this.copyToClipboard(el)
      });
  }

  private async copyToClipboard(el: HTMLHeadingElement) {
    const url = `${environment.url}/docs/${this.page}#${el.id}`;
    await navigator.clipboard.writeText(url);
  }
}
