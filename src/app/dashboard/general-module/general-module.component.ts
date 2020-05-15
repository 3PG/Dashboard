import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModuleConfig } from '../../module-config';
import { GuildService } from '../../services/guild.service';
import { UserService } from 'src/app/services/user.service';
import { PickerComponent } from '@ctrl/ngx-emoji-mart';

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
    public userService: UserService,
    saveChanges: MatSnackBar) {
    super(guildService, route, userService, saveChanges);
  }

  async ngOnInit() {
    await super.init();

    await this.updateReactionRolePreviews();
  }

  async updateReactionRolePreviews() {
    this.reactionRoleMessages = [];
    for (const i of this.reactionRolesIndices) {
      const config = (this.form.controls.reactionRoles as FormArray)
        .get(i.toString())?.value;
      if (!(config.channel && config.messageId))
        return this.reactionRoleMessages.push(null);      

      try {
        const msg = await this.getMessage(config.channel, config.messageId);
        this.reactionRoleMessages.push(msg);        
      } catch { this.reactionRoleMessages.push(null); }
    }
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

  getMessage(channelId: string, messageId: string) {
    return this.guildService.getMessage(this.guildId, channelId, messageId);
  }

  async submit() {
    await super.submit();

    await this.updateReactionRolePreviews();
  }

  toDate(dateString: string) { return new Date(dateString); }
}
