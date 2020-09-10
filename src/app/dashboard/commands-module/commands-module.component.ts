import { Component, OnInit } from '@angular/core';
import { CommandsService } from '../../services/commands.service';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModuleConfig } from '../../module-config';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GuildService } from '../../services/guild.service';
import { UserService } from 'src/app/services/user.service';
import { toIterable } from 'src/app/utils';
import { slideUpDown } from '../leveling-module/leveling-module.animations';

@Component({
  selector: 'app-commands-module',
  templateUrl: './commands-module.component.html',
  styleUrls: ['./commands-module.component.css'],
  animations: [ slideUpDown ]
})
export class CommandsModuleComponent extends ModuleConfig implements OnInit {
  moduleName = 'commands';
  
  commands = [];
  customCommandIndices = toIterable(10);

  get commandsFormArray() { return this.form.get('configs') as FormArray; }

  constructor(
    guildService: GuildService,
    route: ActivatedRoute,
    userService: UserService,
    saveChanges: MatSnackBar,
    private service: CommandsService) {
    super(guildService, route, userService, saveChanges);
  }

  async ngOnInit() {
    await this.service.init();

    this.commands = this.service.commands;
    
    await super.init();
  }

  async buildForm({ commands }: any) { 
    const formGroup = new FormGroup({
      configs: new FormArray([]),
      custom: new FormArray([])
    });

    for (let i = 0; i < this.commands.length; i++) {
      const command = commands[i];
      (formGroup.get('configs') as FormArray)
        .setControl(i, new FormGroup({
          name: new FormControl(this.commands[i].name ?? ''),
          roles: new FormControl(command?.roles ?? []),
          channels: new FormControl(command?.channels ?? []),
          enabled: new FormControl(command?.enabled ?? true)
        }));
    }
    for (let i = 0; i < this.customCommandIndices.length; i++) {
      const config = commands.custom[i];
      (formGroup.get('custom') as FormArray)
        .setControl(i, new FormGroup({
          alias: new FormControl(config?.alias),
          anywhere: new FormControl(config?.anywhere),
          command: new FormControl(config?.command)
        }));
    }
    return formGroup;
  }

  async submit() {
    await super.submit();
  }

  filterFormValue() {
    const value = this.form.value;
    value.configs = [];
    for (let i = 0; i < this.commandsFormArray.length; i++) {
      const control = this.commandsFormArray.get(i.toString());
      if (!control.pristine)
        value.configs.push(control.value);
    }
  }
}