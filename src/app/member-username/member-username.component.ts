import { Component, Input } from '@angular/core';

@Component({
  selector: 'member-username',
  templateUrl: './member-username.component.html',
  styleUrls: ['./member-username.component.css']
})
export class MemberUsernameComponent {
  @Input() member = {
    displayAvatarURL: 'TODO: add default avatar',
    username: 'unknown',
    tag: 'unknown#0000'
  };
  @Input() withAvatar = true;
}
