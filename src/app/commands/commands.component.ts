import { Component, OnInit, ViewChild } from '@angular/core';
import { CommandsService } from '../services/commands.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { SEOService } from '../services/seo.service';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.css']
})
export class CommandsComponent implements OnInit {
  displayedColumns: string[] = ['usage', 'module', 'summary', 'permission'];
  dataSource = new MatTableDataSource();
  commands = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

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
    await this.service.updateCommands();      
    this.commands = this.service.commands;
    
    this.dataSource = new MatTableDataSource(this.commands);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator)
      this.dataSource.paginator.firstPage();
  }
}
