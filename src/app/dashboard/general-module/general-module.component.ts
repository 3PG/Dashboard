import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModuleConfig } from '../../module-config';
import { GuildService } from '../../services/guild.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-general-module',
  templateUrl: './general-module.component.html',
  styleUrls: ['./general-module.component.css']
})
export class GeneralModuleComponent extends ModuleConfig implements OnInit {
  moduleName = 'general';

  reactionRoleMessages = [];
  reactionRolesIndices = [0,1,2,3];

  get general() { return this.savedGuild.general; }

  constructor(
    public guildService: GuildService,
    route: ActivatedRoute,
    saveChanges: MatSnackBar,
    public userService: UserService) {
    super(guildService, route, saveChanges);
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
      autoRoles: new FormControl(general.autoRoles ?? []),
      reactionRoles: new FormArray([])
    });

    for (const i of this.reactionRolesIndices) {
      const config = general.reactionRoles[i];

      (formGroup.get('reactionRoles') as FormArray).setControl(i,
        new FormGroup({
          channel: new FormControl(config?.channel ?? ''),
          role: new FormControl(config?.role ?? ''),
          emote: new FormControl(config?.emote ?? '', 
            Validators.pattern(/(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]){1}/gm)),
          messageId: new FormControl(config?.messageId ?? '', Validators.pattern(/[0-9]{18}/g))
        }));    
    }
    return formGroup;
  }

  getMessage(channelId: any, messageId: string) {    
    return (channelId && messageId) ?
      this.guildService.getMessage(this.guildId, channelId, messageId) : null;
  }

  addEmoji($event) {
    console.log($event);
  }
}
