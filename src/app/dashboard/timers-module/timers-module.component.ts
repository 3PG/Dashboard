import { Component, OnInit } from '@angular/core';
import { GuildService } from 'src/app/services/guild.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModuleConfig } from 'src/app/module-config';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

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
    saveChanges: MatSnackBar) {
    super(guildService, route, saveChanges);
  }

  async ngOnInit() {
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
          command: new FormControl(commandTimer?.command ?? '', Validators.pattern(/^[A-Za-z0-9]+$/)),
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

  async updateSchedule() {
    this.schedule = await this.guildService.getTimerSchedule(this.guildId);
  }

  isCommandTimer(timer: any) {
    return 'command' in timer;
  }

  getChannel(id: string) {
    return this.textChannels.find(c => c.id === id) || { name: '[UNKNOWN_CHANNEL]' };
  }

  getTimerNumber(task: any) {
  }
}
