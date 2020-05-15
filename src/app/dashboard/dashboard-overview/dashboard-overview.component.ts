import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard-overview.component.html',
  styleUrls: ['./dashboard-overview.component.css']
})
export class DashboardComponent {
  get user() { return this.userService.user; }
  get voteURLs() { return environment.voteURLs; }

  constructor(private userService: UserService) {
    document.title = '3PG - Dashboard';
  }
}
