import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModuleConfig } from '../../module-config';
import { GuildService } from '../../services/guild.service';

@Component({
  selector: 'app-general-module',
  templateUrl: './general-module.component.html',
  styleUrls: ['./general-module.component.css']
})
export class GeneralModuleComponent extends ModuleConfig implements OnInit {
  moduleName = 'general';

  reactionRolesIndices = [0,1,2,3];

  get general() { return this.savedGuild.general; }

  constructor(
    guildService: GuildService,
    route: ActivatedRoute,
    saveChanges: MatSnackBar) {
    super(guildService, route, saveChanges);
  }

  async ngOnInit() {
    await super.init();
  }

  buildForm() {
    const fg = new FormGroup({
      prefix: new FormControl('', [
        Validators.required, 
        Validators.maxLength(5) 
      ]),
      ignoredChannels: new FormControl([]),
      autoRoles: new FormControl([]),
      reactionRoles: new FormArray([])
    });

    for (const i of this.reactionRolesIndices) {
      (fg.get('reactionRoles') as FormArray).setControl(i,
        new FormGroup({
          channel: new FormControl(''),
          role: new FormControl(''),
          emote: new FormControl('', 
            Validators.pattern(/(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]){1}/gm)),
          messageId: new FormControl('', Validators.pattern(/[0-9]{18}/g))
        }));    
    }
    return fg;
  }
  
  initFormValues(savedGuild: any) {
    const general = savedGuild.general;
    this.form.controls.prefix.setValue(general.prefix);
    this.form.controls.ignoredChannels.setValue(general.ignoredChannels);
    this.form.controls.autoRoles.setValue(general.autoRoles);
    
    for (const i of this.reactionRolesIndices) {
      const config = general.reactionRoles[i];
      if (!config) return;

      (this.form.controls.reactionRoles as FormArray)
        .get(i.toString())
        .setValue(config);      
    }
  }

  addEmoji($event) {
    console.log($event);    
  }
}
