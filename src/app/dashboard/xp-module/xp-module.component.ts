import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GuildService } from '../../services/guild.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModuleConfig } from '../../module-config';

@Component({
  selector: 'app-xp-module',
  templateUrl: './xp-module.component.html',
  styleUrls: ['./xp-module.component.css']
})
export class XPModuleComponent extends ModuleConfig implements OnInit {
  levelRoleIndices = [0,1,2,3,4,5,6,7];
  moduleName = 'xp';

  get levelRolesFormArray() { return this.form.get('levelRoles') as FormArray; }

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
    const formGroup = new FormGroup({
      ignoredRoles: new FormControl([]),
      levelRoles: new FormArray([]),
      maxMessagesPerMinute: new FormControl(0, [ Validators.min(1), Validators.max(30) ]),
      xpPerMessage: new FormControl(0)
    }); 
    this.buildLevelRolesFormArray(formGroup);
    return formGroup;
  }

  private buildLevelRolesFormArray(formGroup: FormGroup) {
    for (const i of this.levelRoleIndices) {
      (formGroup.get('levelRoles') as FormArray)
        .push(new FormGroup({
          level: new FormControl(null, Validators.min(1)),
          role: new FormControl('')
        }));
    }
  }
  
  initFormValues(savedGuild: any) {
    const xp = savedGuild.xp;
    
    this.form.controls.ignoredRoles.setValue(xp.ignoredRoles);

    for (let i = 0; i < xp.levelRoles.length; i++)
      this.levelRolesFormArray.controls[i]
        .setValue(xp.levelRoles[i]);
    
    this.form.controls.maxMessagesPerMinute.setValue(xp.maxMessagesPerMinute);
    this.form.controls.xpPerMessage.setValue(xp.xpPerMessage);
  }
}

export interface LevelRole {
  level: number;
  role: string;
}
