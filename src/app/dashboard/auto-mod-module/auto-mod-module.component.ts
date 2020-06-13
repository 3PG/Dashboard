import { Component, OnInit } from '@angular/core';
import { ModuleConfig } from '../../module-config';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { GuildService } from '../../services/guild.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-auto-mod-module',
  templateUrl: './auto-mod-module.component.html',
  styleUrls: ['./auto-mod-module.component.css']
})
export class AutoModModuleComponent extends ModuleConfig implements OnInit {
  filters = [
    MessageFilter.Emoji,
    MessageFilter.ExplicitWords,
    MessageFilter.Links,
    MessageFilter.MassCaps,
    MessageFilter.MassMention,
    MessageFilter.Words,
    MessageFilter.Zalgo
  ];
  MessageFilter = MessageFilter;
  moduleName = 'autoMod';

  constructor(
    guildService: GuildService,
    route: ActivatedRoute,
    userService: UserService,
    saveChanges: MatSnackBar) {
    super(guildService, route, userService, saveChanges);
  }

  async ngOnInit() {
    await super.init();
  }
  
  buildForm({ autoMod }: any) {
    return new FormGroup({
      banWords: new FormControl(autoMod.banWords ?? []),
      banLinks: new FormControl(autoMod.banLinks ?? []),
      filters: new FormControl(autoMod.filters ?? []),
      autoDeleteMessages: new FormControl(autoMod.autoDeleteMessages ?? true),
      autoWarnUsers: new FormControl(autoMod.autoWarnUsers ?? false),
      ignoredRoles: new FormControl(autoMod.ignoredRoles ?? []),
      filterThreshold: new FormControl(autoMod.filterThreshold ?? 5,
        [ Validators.min(1), Validators.max(20) ]),
    });
  }
}

export enum MessageFilter {
  Emoji = 'EMOJI', 
  ExplicitWords = 'EXPLICIT_WORDS',
  Links = 'LINKS',
  MassCaps = 'MASS_CAPS',
  MassMention = 'MASS_MENTION',
  Words = 'WORDS',
  Zalgo = 'ZALGO'
}
