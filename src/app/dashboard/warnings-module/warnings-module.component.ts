import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { GuildService } from 'src/app/services/guild.service';

@Component({
  selector: 'app-warnings-module',
  templateUrl: './warnings-module.component.html',
  styleUrls: ['./warnings-module.component.css']
})
export class WarningsModuleComponent implements OnInit {
  members: any[];

  displayedColumns: string[] = ['number', 'by', 'old', 'new', 'at'];
  dataSource = new MatTableDataSource();
  changes: any[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private route: ActivatedRoute,
    private guildService: GuildService,
    private service: GuildService) {}

  async ngOnInit() { 
    const id = this.route.snapshot.paramMap.get('id');

    const log = await this.service.getSavedLog(id);
    this.changes = log.changes.reverse();

    this.members = await this.guildService.getMembers(id);
    
    this.dataSource = new MatTableDataSource(this.changes);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator)
      this.dataSource.paginator.firstPage();
  }

  getMember(id: string) {          
    return this.members.find(m => m.id === id) || {};
  }
}
