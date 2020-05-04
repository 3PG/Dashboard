import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import marked from 'marked';
import { map } from 'rxjs/operators';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {
  defaultPage = 'getting-started';

  get markdownPagePath$() {
    return this.route.paramMap.pipe(
      map(paramMap => {
        const page = paramMap.get('page')?.toLowerCase() || this.defaultPage;      
        return `assets/docs/${page}.md`;
    }));
  }

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    router: Router) {
    route.paramMap.subscribe(paramMap => {      
      const page = paramMap.get('page')?.toLowerCase();
      if (!page)
        router.navigate([`/docs/${this.defaultPage}`]);
    });
  }

  async ngOnInit() {
    this.convertToMarkdown();
  }

  convertToMarkdown() {
    this.markdownPagePath$.subscribe(async(path) => { 
      const file = await fetch(path);
      const md = await file.text();
      
      document.getElementById('doc').innerHTML = 
        this.replaceDocVariables(marked(md, { breaks: true }));
      document.querySelector('h1').classList.add('display-3');

      if (window.location.hash)
        document.querySelector(window.location.hash)?.scrollIntoView();
    });
  }

  replaceDocVariables(content: string) {
    return content
      .replace(/<User>/g, `@${this.userService.user?.tag ?? 'User#1234'}`);
  }
}
