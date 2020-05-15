import { Component, OnInit } from '@angular/core';
import { ModuleConfig } from 'src/app/module-config';
import { GuildService } from 'src/app/services/guild.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-music-module',
  templateUrl: './music-module.component.html',
  styleUrls: ['./music-module.component.css']
})
export class MusicModuleComponent extends ModuleConfig implements OnInit {
  minSearchLength = 2;
  moduleName = 'music';

  get focused() { return document.activeElement.id === 'search'; }
  
  constructor(
    public guildService: GuildService,
    route: ActivatedRoute,
    userService: UserService,
    saveChanges: MatSnackBar,
    public service: MusicService) {
    super(guildService, route, userService, saveChanges);
  }

  async ngOnInit() {
    await super.init();
  }

  buildForm({ music }) {
    return new FormGroup({
      maxTrackHours: new FormControl(music.maxTrackHours ?? 2,
        [ Validators.min(1), Validators.max(24) ])
    });
  }

  min(a, b) { return Math.min(a, b); }
  max(a, b) { return Math.max(a, b); }
}
