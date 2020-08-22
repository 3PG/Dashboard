import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { CommandsComponent } from './commands/commands.component';
import { CratesComponent } from './crates/crates.component';
import { CustomizeXPCardComponent } from './customize-xp-card/customize-xp-card.component';
import { LogsModuleComponent } from './dashboard/announce-module/logs-module.component';
import { AutoModModuleComponent } from './dashboard/auto-mod-module/auto-mod-module.component';
import { CommandsModuleComponent } from './dashboard/commands-module/commands-module.component';
import { DashboardComponent } from './dashboard/dashboard-overview/dashboard-overview.component';
import { DashboardSidebarComponent } from './dashboard/dashboard-sidebar/dashboard-sidebar.component';
import { PremiumDirective } from './dashboard/directives/premium.directive';
import { GeneralModuleComponent } from './dashboard/general-module/general-module.component';
import { GuildSidebarComponent } from './dashboard/guild-sidebar/guild-sidebar.component';
import { GuildComponent } from './dashboard/guild/guild.component';
import { LeaderboardModuleComponent } from './dashboard/leaderboard-module/leaderboard-module.component';
import { LevelingModuleComponent } from './dashboard/leveling-module/leveling-module.component';
import { MusicModuleComponent } from './dashboard/music-module/music-module.component';
import { ProReminderComponent } from './dashboard/pro-reminder/pro-reminder.component';
import { ReactionRolesModuleComponent } from './dashboard/reaction-roles-module/reaction-roles-module.component';
import { SaveChangesComponent } from './dashboard/save-changes/save-changes.component';
import { SettingsModuleComponent } from './dashboard/settings-module/settings-module.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { TimersModuleComponent } from './dashboard/timers-module/timers-module.component';
import { WarningsModuleComponent } from './dashboard/warnings-module/warnings-module.component';
import { WarningsWidgetComponent } from './dashboard/warnings-widget/warnings-widget.component';
import { AuditLogWidgetComponent } from './dashboard/widgets/audit-log-widget/audit-log-widget.component';
import { CommandsWidgetComponent } from './dashboard/widgets/commands-widget/commands-widget.component';
import { DocsSidebarComponent } from './docs-sidebar/docs-sidebar.component';
import { DocsComponent } from './docs/docs.component';
import { EmojiDirective } from './emoji.directive';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { HomeComponent } from './home/home.component';
import { InviteComponent } from './invite/invite.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MaterialModule } from './material-module';
import { MemberUsernameComponent } from './member-username/member-username.component';
import { MessagePreviewComponent } from './message-preview/message-preview.component';
import { MessagesWidgetComponent } from './messages-widget/messages-widget.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { CleanDateTimePipe } from './pipes/clean-date-time.pipe';
import { DurationStringPipe } from './pipes/duration-string.pipe';
import { MiniDatePipe } from './pipes/mini-date.pipe';
import { SnakeToSentenceCasePipe } from './pipes/snake-to-sentence-case.pipe';
import { TruncatedPipe } from './pipes/truncated.pipe';
import { ProComponent } from './pro/pro.component';
import { SEOService } from './services/seo.service';
import { SpinnerComponent } from './spinner/spinner.component';
import { WavesComponent } from './waves/waves.component';
import { XPCardComponent } from './xp-card/xp-card.component';
import { ZippyComponent } from './zippy/zippy.component';
import { CamelToSentenceCasePipe } from './pipes/camel-to-sentence-case.pipe';
import { LogModuleComponent } from './dashboard/log-module/log-module.component';
import { ProCardsComponent } from './pro-cards/pro-cards.component';

export class AlertErrorHandler implements ErrorHandler {  
  async handleError(error: Error | any) {
    try {
      console.log(error);

      const key = localStorage.getItem('key');
      await fetch(`${environment.endpoint}/error?key=${key}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: error.message })
      });
    } catch {}
  }
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CommandsComponent,
    AuthComponent,
    InviteComponent,
    LogoutComponent,
    DashboardComponent,
    SidebarComponent,
    GuildComponent,
    SpinnerComponent,
    CommandsModuleComponent,
    LogModuleComponent,
    AutoModModuleComponent,
    GeneralModuleComponent,
    MusicModuleComponent,
    LevelingModuleComponent,
    LogsModuleComponent,
    SettingsModuleComponent,
    LevelingModuleComponent,
    GuildSidebarComponent,
    LeaderboardModuleComponent,
    XPCardComponent,
    CustomizeXPCardComponent,
    DashboardSidebarComponent,
    PremiumDirective,
    SaveChangesComponent,
    NotFoundComponent,
    PaymentSuccessComponent,
    ProComponent,
    DocsComponent,
    CleanDateTimePipe,
    MemberUsernameComponent,
    DocsSidebarComponent,
    ZippyComponent,
    AuditLogWidgetComponent,
    CommandsWidgetComponent,
    MiniDatePipe,
    MessagePreviewComponent,
    MessagesWidgetComponent,
    WarningsModuleComponent,
    WarningsWidgetComponent,
    TimersModuleComponent,
    ProReminderComponent,
    SnakeToSentenceCasePipe,
    EmojiDirective,
    TruncatedPipe,
    DurationStringPipe,
    CratesComponent,
    HomeFooterComponent,
    WavesComponent,
    LoginComponent,
    ReactionRolesModuleComponent,
    CamelToSentenceCasePipe,
    ProCardsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ChartsModule
  ],
  exports: [PremiumDirective],
  providers: [
    SEOService,
    { provide: ErrorHandler, useClass: AlertErrorHandler }
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {}
