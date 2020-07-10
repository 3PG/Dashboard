import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { GuildService } from '../services/guild.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  constructor(
    private guildService: GuildService,
    private router: Router,
    private userService: UserService) {}

  async ngOnInit() {
    localStorage.removeItem('key');
    
    await this.userService.updateUser();
    await this.userService.updateSavedUser();
    await this.guildService.updateGuilds();

    this.router.navigate(['/']);
  }
}
