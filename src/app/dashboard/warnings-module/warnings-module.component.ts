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

  displayedColumns: string[] = ['number', 'to', 'by', 'reason', 'at'];
  dataSource = new MatTableDataSource();
  warnings: any[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private route: ActivatedRoute,
    private guildService: GuildService,
    private service: GuildService) {}

  async ngOnInit() { 
    const id = this.route.snapshot.paramMap.get('id');

    this.members = await this.guildService.getMembers(id);
    
    const warnings = await this.service.getWarnings(id);
    warnings.reverse();

    this.dataSource = new MatTableDataSource(warnings);

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
