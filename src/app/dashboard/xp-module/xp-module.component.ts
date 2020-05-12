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
  
  buildForm({ xp }: any) {
    const formGroup = new FormGroup({
      ignoredRoles: new FormControl(xp.ignoredRoles ?? []),
      levelRoles: new FormArray([]),
      maxMessagesPerMinute: new FormControl(xp.maxMessagesPerMinute ?? 50,
        [ Validators.min(1), Validators.max(30) ]),
      xpPerMessage: new FormControl(xp.xpPerMessage ?? 50)
    }); 
    this.buildLevelRolesFormArray(formGroup, xp);
    return formGroup;
  }

  private buildLevelRolesFormArray(formGroup: FormGroup, xp: any) {
    for (const i of this.levelRoleIndices)
      (formGroup.get('levelRoles') as FormArray)
        .setControl(i,
          (new FormGroup({
          level: new FormControl(xp.levelRoles[i]?.level ?? 0, Validators.min(1)),
          role: new FormControl(xp.levelRoles[i]?.role ?? '')
        })));
  }
}

export interface LevelRole {
  level: number;
  role: string;
}
