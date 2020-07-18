import { Component, OnInit, ViewChild } from '@angular/core';
import { CommandsService } from '../services/commands.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { SEOService } from '../services/seo.service';
import { kebabToCamelCase } from '../utils';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.css']
})
export class CommandsComponent implements OnInit {
  commands = [];
  displayedCommands = [];
  modules = [
    { name: 'autoMod', icon: 'fa-gavel' },
    { name: 'general', icon: 'fa-star' },
    { name: 'leveling', icon: 'fa-trophy' },
    { name: 'music', icon: 'fa-music' }
  ];
  selectedModule = '';
  constructor(
    seo: SEOService,
    private service: CommandsService) {
      seo.setTags({
        titleSuffix: 'Commands',
        description: `View a list of 3PG's Discord chat commands. This includes music commands and more!`,
        url: 'commands'
      })
    }
  
    async ngOnInit() {
      await this.service.init();
  
      this.commands = this.displayedCommands = this.service.commands;
  
      this.setModule('autoMod');
    }

  setModule(name: string) {
    this.selectedModule = name;
    this.displayedCommands = this.commands
      .filter(c => kebabToCamelCase(c.module) === name);    
  }

  search(query: string) {
    const empty = query.trim().length <= 0;
    if (empty)
      return this.setModule(this.modules[0].name);

    this.displayedCommands = this.service.search(query);
    this.selectedModule = '';
  }
}
