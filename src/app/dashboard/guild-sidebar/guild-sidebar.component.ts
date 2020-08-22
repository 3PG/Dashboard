import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GuildService, APIGuild } from '../../services/guild.service';

@Component({
  selector: 'guild-sidebar',
  templateUrl: './guild-sidebar.component.html',
  styleUrls: ['./guild-sidebar.component.css']
})
export class GuildSidebarComponent implements OnInit {
  @Input('waitFor') loaded = true;
  
  id: string;
  guild: any;
  savedGuild: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router) {
      document.title = '3PG - Dashboard';
    }

  async ngOnInit() {
    this.route.paramMap.subscribe(async(paramMap) => {
      this.id = paramMap.get('id');

      const { saved, guild } = this.route.snapshot.data as APIGuild;
      this.savedGuild = saved;
      this.guild = guild;
      
      if (!guild)
        this.router.navigate(['/dashboard']);
    });
  }
}
