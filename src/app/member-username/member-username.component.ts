import { Component, Input } from '@angular/core';

@Component({
  selector: 'member-username',
  templateUrl: './member-username.component.html',
  styleUrls: ['./member-username.component.css']
})
export class MemberUsernameComponent {
  @Input() member = {
    displayAvatarURL: 'https://cdn.discordapp.com/embed/avatars/0.png',
    username: 'unknown',
    tag: 'unknown#0000'
  };
  @Input() withAvatar = true;
}
