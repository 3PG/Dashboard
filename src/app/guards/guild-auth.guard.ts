import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { GuildService } from '../services/guild.service';
import { UserService } from '../services/user.service';

@Injectable({ providedIn: 'root' })
export class GuildAuthGuard implements CanActivate {
  constructor(
    private guildService: GuildService,
    private userService: UserService,
    private router: Router) {}

  async canActivate(next: ActivatedRouteSnapshot) {
    await this.userService.init();
    await this.guildService.init();

    const guildId = next.paramMap.get('id');                
    const apiGuild = await this.guildService.getAPIGuild(guildId);

    this.guildService.singleton = next.data =
      (guildId === this.guildService.singleton?.guild.id)
        ? this.guildService.singleton : apiGuild
      const canActivate = this.guildService.guilds?.some(g => g.id === guildId);
      if (!canActivate)
        this.router.navigate(['/dashboard']);
      return canActivate;
  }  
}
