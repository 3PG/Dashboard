import { Component, OnInit } from '@angular/core';
import { CommandsService } from '../../services/commands.service';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModuleConfig } from '../../module-config';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GuildService } from '../../services/guild.service';

@Component({
  selector: 'app-commands-module',
  templateUrl: './commands-module.component.html',
  styleUrls: ['./commands-module.component.css']
})
export class CommandsModuleComponent extends ModuleConfig implements OnInit {
  moduleName = 'commands';

  commands = [];
  commandConfigs: CommandConfig[] = [];

  get commandsFormArray() { return this.form.get('configs') as FormArray; }

  constructor(
    guildService: GuildService,
    route: ActivatedRoute,
    saveChanges: MatSnackBar,
    private service: CommandsService) {
    super(guildService, route, saveChanges);
  }

  async ngOnInit() {
    this.commands = this.service.commands;
    
    await super.init();
  }

  async buildForm({ commands }: any) { 
    const formGroup = new FormGroup({
      configs: new FormArray([])
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

export interface CommandConfig {
  name: string;
  enabled: boolean;
}
