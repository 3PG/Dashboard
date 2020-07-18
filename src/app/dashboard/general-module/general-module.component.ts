import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModuleConfig } from '../../module-config';
import { GuildService } from '../../services/guild.service';
import { UserService } from 'src/app/services/user.service';
import { toIterable } from 'src/app/utils';

@Component({
  selector: 'app-general-module',
  templateUrl: './general-module.component.html',
  styleUrls: ['./general-module.component.css']
})
export class GeneralModuleComponent extends ModuleConfig implements OnInit {
  moduleName = 'general';

  get general() { return this.savedGuild.general; }

  constructor(
    public guildService: GuildService,
    route: ActivatedRoute,
    public userService: UserService,
    saveChanges: MatSnackBar) {
    super(guildService, route, userService, saveChanges);
  }

  async ngOnInit() {
    await super.init();
  }

  buildForm({ general }: any) {
    const formGroup = new FormGroup({
      prefix: new FormControl(general.prefix ?? '', [
        Validators.required, 
        Validators.maxLength(5) 
      ]),
      ignoredChannels: new FormControl(general.ignoredChannels ?? []),
      autoRoles: new FormControl(general.autoRoles ?? [])
    });
    return formGroup;
  }
}
