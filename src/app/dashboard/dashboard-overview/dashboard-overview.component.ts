import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard-overview.component.html',
  styleUrls: ['./dashboard-overview.component.css']
})
export class DashboardComponent {
  readonly discordURL = environment.discordURL;
  readonly voteURLs = environment.voteURLs;
  
  get user() { return this.userService.user; }

  constructor(private userService: UserService) {
    document.title = '3PG - Dashboard';
  }
}
