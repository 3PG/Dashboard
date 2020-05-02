import { Component, OnInit } from '@angular/core';
import { ModuleConfig } from '../../module-config';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GuildService } from '../../services/guild.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-announce-module',
  templateUrl: './announce-module.component.html',
  styleUrls: ['./announce-module.component.css']
})
export class AnnounceModuleComponent extends ModuleConfig implements OnInit {
  EventType = EventType;

  moduleName = 'announce';

  events = [
    EventType.MemberJoin,
    EventType.MemberLeave,
    EventType.MessageDeleted,
    EventType.Ban,
    EventType.Unban,
    EventType.Mute,
    EventType.LevelUp
  ];

  eventConfigs: AnnounceEvent[] = [];

  constructor(
    private sanitizer: DomSanitizer,
    guildService: GuildService,
    route: ActivatedRoute,
    saveChanges: MatSnackBar) {
    super(guildService, route, saveChanges);
  }

  async ngOnInit() {
    await super.init();

    this.eventConfigs = this.savedGuild.announce.events;
  }

  buildForm() {
    const formGroup = new FormGroup({
      events: new FormArray([])
    });
    for (const event of this.events)
      (formGroup.get('events') as FormArray).push(new FormGroup({
        event: new FormControl(event),
        enabled: new FormControl(false),
        channel: new FormControl(),
        message: new FormControl(`\`${EventType[event]}\` was triggered in **[GUILD]**!`)
      }));
    return formGroup;
  }
  
  initFormValues(savedGuild: any) {    
    for (const event of this.events) {
      const config = savedGuild.announce.events.find(e => e.event === event);
      if (!config) continue;

      (this.form.get('events') as FormArray)
        .get(event.toString())
        .setValue({
          event,
          enabled: true,
          channel: config.channel,
          message: config.message
        });
    }    
  }

  getEvent(eventType: EventType) {
    return this.eventConfigs.find(e => e.event === eventType);
  }

  async submit() {
    const value = this.form.value;
    this.filterFormEvents(value);
    
    await this.guildService.saveGuild(this.guildId, this.moduleName, value);
  }

  private filterFormEvents(value: any) {
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
  
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

export enum EventType { MemberJoin, MemberLeave, MessageDeleted, Ban, Unban, Mute, LevelUp }

export interface AnnounceEvent {
  event: EventType;
  channel: string;
  message: string;
}
