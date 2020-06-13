import { Component, OnInit } from '@angular/core';
import { GuildService } from 'src/app/services/guild.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModuleConfig } from 'src/app/module-config';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-timers-module',
  templateUrl: './timers-module.component.html',
  styleUrls: ['./timers-module.component.css']
})
export class TimersModuleComponent extends ModuleConfig implements OnInit {
  timerIndices = [0,1];
  moduleName = 'timers';

  schedule = [];

  constructor(
    guildService: GuildService,
    route: ActivatedRoute,
    userService: UserService,
    saveChanges: MatSnackBar) {
    super(guildService, route, userService, saveChanges);
  }

  async ngOnInit() {
    if (this.userService.savedUser?.premium)
      this.timerIndices.push(2,3);

    await super.init();

    await this.updateSchedule();
  }

  buildForm({ timers }: any) {
    const formGroup = new FormGroup({
      commandTimers: new FormArray([]),
      messageTimers: new FormArray([])
    });

    for (const i of this.timerIndices) {
      const commandTimer = timers.commandTimers[i];
      const messageTimer = timers.messageTimers[i];

      (formGroup.controls.commandTimers as FormArray).setControl(i,
        new FormGroup({
          enabled: new FormControl(commandTimer?.enabled ?? false),
          interval: new FormControl(commandTimer?.interval ?? '01:00'),
          from: new FormControl(commandTimer?.from ?? new Date()),
          command: new FormControl(commandTimer?.command ?? '', Validators.pattern(/^[A-Za-z0-9 ]+$/)),
          channel: new FormControl(commandTimer?.channel ?? '')
        }));
      (formGroup.controls.messageTimers as FormArray).setControl(i,
        new FormGroup({
          enabled: new FormControl(messageTimer?.enabled ?? false),
          interval: new FormControl(messageTimer?.interval ?? '01:00'),
          from: new FormControl(messageTimer?.from ?? new Date()),
          message: new FormControl(messageTimer?.message ?? '', Validators.pattern(/^.{1,}$/)),
          channel: new FormControl(messageTimer?.channel ?? '')
        }));
    }
    return formGroup;
  }

  async submit() {  
    await super.submit();

    await this.updateSchedule();
  }

  filterFormValue() {
    const { commandTimers, messageTimers } = this.form.value;
    for (let i = 0; i < commandTimers.length; i++)
      if (!commandTimers[i].enabled)
        commandTimers.splice(i, 1);
    for (let i = 0; i < messageTimers.length; i++)
      if (!messageTimers[i].enabled)
        messageTimers.splice(i, 1);
  }

  async updateSchedule() {
    this.schedule = await this.guildService.getTimerSchedule(this.guildId);
  }

  isCommandTimer(timer: any) {
    return 'command' in timer;
  }

  getChannel(id: string) {
    return this.textChannels.find(c => c.id === id) || { name: 'N/A' };
  }
}
