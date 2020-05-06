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
    await this.updateSchedule();
    await super.init();
  }

  // TODO: combine buildForm and initFormValues
  buildForm() {
    const formGroup = new FormGroup({
      commandTimers: new FormArray([]),
      messageTimers: new FormArray([])
    });
    for (const i of this.timerIndices) {
      (formGroup.controls.commandTimers as FormArray).setControl(i,
        new FormGroup({
          enabled: new FormControl(false),
          interval: new FormControl(0, [ Validators.min(60 * 1000), Validators.max(24 * 60 * 60 * 1000) ]),
          from: new FormControl(0, [ Validators.min(60 * 1000), Validators.max(24 * 60 * 60 * 1000) ]),
          command: new FormControl('', Validators.pattern(/[A-Za-z0-9]+/)),
          channel: new FormControl('')
        }));
      (formGroup.controls.messageTimers as FormArray).setControl(i,
        new FormGroup({
          enabled: new FormControl(false),
          interval: new FormControl(0, [ Validators.min(60 * 1000), Validators.max(24 * 60 * 60 * 1000) ]),
          from: new FormControl(0, [ Validators.min(60 * 1000), Validators.max(24 * 60 * 60 * 1000) ]),
          message: new FormControl('', Validators.pattern(/^.{2,}$/)),
          channel: new FormControl('')
        }));
    }
    return formGroup;
  }
  
  initFormValues(savedGuild: any) {
    const timers = savedGuild.timers;
    for (const i of this.timerIndices) {
      (this.form.controls.commandTimers as FormArray).setControl(i,
        new FormGroup({
          enabled: new FormControl(timers.commandTimers[i]?.enabled),
          interval: new FormControl(60000, [ Validators.min(60 * 1000), Validators.max(24 * 60 * 60 * 1000) ]),
          from: new FormControl(60000, [ Validators.min(60 * 1000), Validators.max(24 * 60 * 60 * 1000) ]),
          command: new FormControl(timers.commandTimers[i]?.command, Validators.pattern(/[A-Za-z0-9]+/)),
          channel: new FormControl(timers.commandTimers[i]?.channel)
        }));
      (this.form.controls.messageTimers as FormArray).setControl(i,
        new FormGroup({
          enabled: new FormControl(timers.messageTimers[i]?.enabled),
          interval: new FormControl(60000, [ Validators.min(60 * 1000), Validators.max(24 * 60 * 60 * 1000) ]),
          from: new FormControl(60000, [ Validators.min(60 * 1000), Validators.max(24 * 60 * 60 * 1000) ]),
          message: new FormControl(timers.messageTimers[i]?.message, Validators.pattern(/^.{2,}$/)),
          channel: new FormControl(timers.messageTimers[i]?.channel)
        }));
    }}

  async submit() {
    // timers.startTimers(guildId)
    await super.submit();
  }

  filterFormValue() {}

  async cancelTimer(index: number) {
    console.log('cancel: ' + index);
    await this.guildService.cancelTimer(this.guildId, index);
    await this.updateSchedule();
    console.log(this.schedule.length);
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
}