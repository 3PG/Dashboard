import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CommandsComponent } from './commands/commands.component';
import { AuthComponent } from './auth/auth.component';
import { InviteComponent } from './invite/invite.component';
import { LogoutComponent } from './logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard-overview/dashboard-overview.component';
import { GuildComponent } from './dashboard/guild/guild.component';
import { DashboardAuthGuard } from './guards/dashboard-auth.guard';
import { GuildAuthGuard } from './guards/guild-auth.guard';
import { GeneralModuleComponent } from './dashboard/general-module/general-module.component';
import { LevelingModuleComponent as LevelingModuleComponent } from './dashboard/leveling-module/leveling-module.component';
import { MusicModuleComponent } from './dashboard/music-module/music-module.component';
import { AutoModModuleComponent } from './dashboard/auto-mod-module/auto-mod-module.component';
import { AnnounceModuleComponent } from './dashboard/announce-module/logs-module.component';
import { LogModuleComponent } from './dashboard/log-module/log-module.component';
import { SettingsModuleComponent } from './dashboard/settings-module/settings-module.component';
import { CommandsModuleComponent } from './dashboard/commands-module/commands-module.component';
import { LeaderboardModuleComponent } from './dashboard/leaderboard-module/leaderboard-module.component';
import { LeaderboardAuthGuard } from './guards/leaderboard-auth.guard';
import { XPCardComponent } from './xp-card/xp-card.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { ProComponent as ProComponent } from './pro/pro.component';
import { DocsComponent } from './docs/docs.component';
import { CanDeactivateDashboard } from './guards/can-deactivate-dashboard.guard';
import { WarningsModuleComponent } from './dashboard/warnings-module/warnings-module.component';
import { TimersModuleComponent } from './dashboard/timers-module/timers-module.component';
import { BadgesComponent } from './dashboard/badges/badges.component';
import { CratesComponent } from './crates/crates.component';
import { LoginComponent } from './login/login.component';
import { ReactionRolesModuleComponent } from './dashboard/reaction-roles-module/reaction-roles-module.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'commands', component: CommandsComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'docs', component: DocsComponent },
  { path: 'docs/:page', component: DocsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'invite', component: InviteComponent },
  { path: 'leaderboard/:id', component: LeaderboardModuleComponent, canActivate: [LeaderboardAuthGuard] },

  { path: 'dashboard', component: DashboardComponent, canActivate: [DashboardAuthGuard] },
  { path: 'dashboard/badges', component: BadgesComponent, canActivate: [DashboardAuthGuard] },
  { path: 'dashboard/crates', component: CratesComponent, canActivate: [DashboardAuthGuard] },
  { path: 'dashboard/xp-card', component: XPCardComponent, canActivate: [DashboardAuthGuard] },

  { path: 'servers/:id', component: GuildComponent, canActivate: [GuildAuthGuard] },
  { path: 'servers/:id/auto-mod', component: AutoModModuleComponent, canActivate: [GuildAuthGuard], canDeactivate: [CanDeactivateDashboard] },
  { path: 'servers/:id/commands', component: CommandsModuleComponent, canActivate: [GuildAuthGuard], canDeactivate: [CanDeactivateDashboard] },
  { path: 'servers/:id/general', component: GeneralModuleComponent, canActivate: [GuildAuthGuard], canDeactivate: [CanDeactivateDashboard] },
  { path: 'servers/:id/leveling', component: LevelingModuleComponent, canActivate: [GuildAuthGuard], canDeactivate: [CanDeactivateDashboard] },
  { path: 'servers/:id/logs', component: AnnounceModuleComponent, canActivate: [GuildAuthGuard], canDeactivate: [CanDeactivateDashboard] },
  { path: 'servers/:id/music', component: MusicModuleComponent, canActivate: [GuildAuthGuard], canDeactivate: [CanDeactivateDashboard] },
  { path: 'servers/:id/reaction-roles', component: ReactionRolesModuleComponent, canActivate: [GuildAuthGuard], canDeactivate: [CanDeactivateDashboard] },
  { path: 'servers/:id/timers', component: TimersModuleComponent, canActivate: [GuildAuthGuard], canDeactivate: [CanDeactivateDashboard] },

  { path: 'servers/:id/log', component: LogModuleComponent, canActivate: [GuildAuthGuard], canDeactivate: [CanDeactivateDashboard] },
  { path: 'servers/:id/settings', component: SettingsModuleComponent, canActivate: [GuildAuthGuard], canDeactivate: [CanDeactivateDashboard] },
  { path: 'servers/:id/warnings', component: WarningsModuleComponent, canActivate: [GuildAuthGuard], canDeactivate: [CanDeactivateDashboard] },

  { path: 'pro', component: ProComponent },
  { path: 'payment-success', component: PaymentSuccessComponent },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
