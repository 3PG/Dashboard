import { Component, OnInit } from '@angular/core';
import { ModuleConfig } from '../../module-config';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GuildService } from '../../services/guild.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-logs-module',
  templateUrl: './logs-module.component.html',
  styleUrls: ['./logs-module.component.css']
})
export class LogsModuleComponent extends ModuleConfig implements OnInit {
  EventType = EventType;

  moduleName = 'logs';

  events = [
    EventType.Ban,
    EventType.ConfigUpdate,
    EventType.LevelUp,
    EventType.MemberJoin,
    EventType.MemberLeave,
    EventType.MessageDeleted,
    EventType.Mute,
    EventType.Unban,
    EventType.Unmute,
    EventType.Warn
  ];

  eventConfigs: LogEvent[] = [];

  constructor(
    guildService: GuildService,
    route: ActivatedRoute,
    userService: UserService,
    saveChanges: MatSnackBar) {
    super(guildService, route, userService, saveChanges);
  }

  async ngOnInit() {
    await super.init();

    this.eventConfigs = this.savedGuild.logs.events;
  }

  buildForm({ logs }: any) {
    const formGroup = new FormGroup({
      events: new FormArray([])
    });
    for (let i = 0; i < this.events.length; i++) {
      const event = this.events[i];
      const config = logs.events.find(e => e.event === event); 

      (formGroup.get('events') as FormArray).push(new FormGroup({
        event: new FormControl(event),
        enabled: new FormControl(Boolean(config?.channel && config?.message) ?? false),
        channel: new FormControl(config?.channel ?? ''),
        message: new FormControl(config?.message ?? `\`${event}\` was triggered in **[GUILD]**!`, Validators.maxLength(512))
      }));     
    }
    return formGroup;
  }

  getEvent(eventType: EventType) {
    return this.eventConfigs.find(e => e.event === eventType);
  }

  async submit() {    
    await super.submit();
  }

  filterFormEvents(value: any) {
    const filteredEvents = [];
    for (const event of value.events) {
      const filtered = { ...event };
      if (filtered.enabled) {        
        delete filtered.enabled;
        filteredEvents.push(filtered);
      }
    }
    value.events = filteredEvents;
  }
}

export enum EventType {
  Ban = 'BAN', 
  ConfigUpdate = 'CONFIG_UPDATE',
  LevelUp = 'LEVEL_UP',
  MessageDeleted = 'MESSAGE_DELETED',
  MemberJoin = 'MEMBER_JOIN',
  MemberLeave = 'MEMBER_LEAVE',
  Mute = 'MUTE',
  Unban = 'UNBAN', 
  Unmute = 'UNMUTE',
  Warn ='WARN'
}

export interface LogEvent {
  event: EventType;
  channel: string;
  message: string;
}
