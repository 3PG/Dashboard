import { Component, Input } from '@angular/core';
import { toHTML } from 'discord-markdown';
import { textEmoji } from 'markdown-to-text-emoji';
import { GuildService } from '../services/guild.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'message-preview',
  templateUrl: './message-preview.component.html',
  styleUrls: ['./message-preview.component.css']
})
export class MessagePreviewComponent {
  @Input() guild = { name: 'Testing123', memberCount: 420 };

  @Input() content = 'Hello World';
  @Input() username = '3PG';
  @Input() avatarURL = 'https://cdn.discordapp.com/avatars/525935335918665760/6e0b19ae2cc25ef5da3d52b787525ed3.png?size=128';

  constructor(private userService: UserService) {}

  get timestamp() {
    const timestamp = new Date().toLocaleTimeString('en-US',
      {
        hour: 'numeric',
        hour12: true,
        minute: 'numeric'
      });
    return `Today at ${timestamp}`;
  }

  get processed() {
    const user = this.userService.user;

    return toHTML(textEmoji(this.content
      .replace(/\[GUILD\]/, this.guild?.name)
      .replace(/\[MEMBER_COUNT\]/g, this.guild?.memberCount.toString())
      .replace(/\[MESSAGE\]/g, 'Testing123')
      .replace(/\[NEW_LEVEL\]/g, '2')
      .replace(/\[OLD_LEVEL\]/g, '1')
      .replace(/\[REASON\]/g, 'not having 3PG PRO')
      .replace(/\[USER\]/g, `@${user.tag}`)))
      .replace(/\[XP\]/g, '300');
  }
}
