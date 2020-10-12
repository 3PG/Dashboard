import { Component, OnInit, ViewChild } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import { UserService } from '../../services/user.service';
import { GuildService } from '../../services/guild.service';
import { MatDrawer } from '@angular/material/sidenav';
import { WSService } from 'src/app/services/ws-service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @ViewChild('drawer') drawer: MatDrawer;

  guilds = [];
  user: any; 

  constructor(
    private guildService: GuildService,
    private userService: UserService,
    private ws: WSService) {}

  async ngOnInit() {
    await this.guildService.init();
    await this.userService.init();
    
    this.user = this.userService.user;
    
    const savedUser = this.userService.savedUser;
    this.guilds = (savedUser.guildPositions)
      ? savedUser.guildPositions?.map(id => this.guildService.getGuild(id))
      : this.guildService.guilds;
  }

  toggle() {
    const icon = document.querySelector('#nav-icon1');
    icon.classList.toggle('open');
    this.drawer.toggle();
  }

  // guild icons
  identifyGuild(index, guild) {
    return guild.id;
  }

  drop({ previousIndex, currentIndex }) {
    moveItemInArray(this.guilds, previousIndex, currentIndex);

    this.ws.socket.emit('GUILD_DRAG', {
      userId: this.user.id,
      guildPositions: this.guilds.map(g => g.id)
    });
  }
}
