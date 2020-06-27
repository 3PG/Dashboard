import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { GuildService } from '../services/guild.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardAuthGuard implements CanActivate {
  constructor(
    private guildService: GuildService,
    private userService: UserService,
    private router: Router) {}

  async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = next.paramMap.get('id');
    const guildConfig = await this.guildService.getSavedGuild(id);
    if (guildConfig?.settings.privateLeaderboard) {
      const members = await this.guildService.getMembers(id);
      return members.some(m => m.id === this.userService.user.id);
    
    }
    const canActivate = guildConfig && !guildConfig.settings.privateLeaderboard;
    if (!canActivate)
      this.router.navigate(['/404']);
    return canActivate;
  }
}
