import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GuildService } from '../../services/guild.service';

@Component({
  selector: 'app-guild',
  templateUrl: './guild.component.html',
  styleUrls: ['./guild.component.css']
})
export class GuildComponent implements OnInit {
  commands: any[]
  botNeedsPerms = false;
  guild: any;

  constructor(
    private guildService: GuildService,
    private route: ActivatedRoute) {}

  async ngOnInit() {
    this.route.paramMap.subscribe(async(paramMap) => {
      const id = paramMap.get('id');
      this.guild = this.guildService.getGuild(id);

      const { commands } = this.guildService.singleton.log;
      this.commands = commands;

      const { hasAdmin } = this.guildService.singleton.status;
      this.botNeedsPerms = !hasAdmin;
    });
  }
}
