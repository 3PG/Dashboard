import { Component, OnInit, ViewChild } from '@angular/core';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import { UserService } from '../../services/user.service';
import { GuildService } from '../../services/guild.service';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @ViewChild('drawer') drawer: MatDrawer;

  get guilds() { return this.guildService.guilds || []; }
  get user() { return this.userService.user || {}; }

  constructor(
    private guildService: GuildService,
    private userService: UserService) {}

  toggle(el: HTMLElement) {
    const icon = (el.tagName !== 'DIV') ? el.parentElement : el;
    icon.classList.toggle('open');
    this.drawer.toggle();
  }

  drop(event: CdkDragDrop<string[]>) { // does not rearrange guilds
    moveItemInArray(this.guilds, event.previousIndex, event.currentIndex);
  }
}
