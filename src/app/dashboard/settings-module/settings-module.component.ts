import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ModuleConfig } from '../../module-config';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GuildService } from '../../services/guild.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-settings-module',
  templateUrl: './settings-module.component.html',
  styleUrls: ['./settings-module.component.css']
})
export class SettingsModuleComponent extends ModuleConfig implements OnInit {
  moduleName = 'settings';

  constructor(
    guildService: GuildService,
    route: ActivatedRoute,
    userService: UserService,
    saveChanges: MatSnackBar) {
    super(guildService, route, userService, saveChanges);
  }

  async ngOnInit() {
    await super.init();
  }

  buildForm({ settings }: any) {
    return new FormGroup({
      privateLeaderboard: new FormControl(settings.privateLeaderboard ?? false)
    });
  }

  async restoreDefaults() {
    await this.guildService.restoreDefaults(this.guildId);
  }
}
