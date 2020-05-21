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
  @Input() eventVariables = true;

  @Input() content = 'Hello World';
  @Input() author = {
    username: '3PG',
    avatarURL: 'https://cdn.discord.com/avatars/525935335918665760/6e0b19ae2cc25ef5da3d52b787525ed3.png?size=128'
  }
  @Input() member = {
    displayName: 'a good bot i guess'
  }
  @Input() createdAt = new Date();

  constructor(private userService: UserService) {}

  get timestamp() {
    const timestamp = this.createdAt.toLocaleTimeString('en-US', {
      hour: 'numeric',
      hour12: true,
      minute: 'numeric'
    }).replace(/-/g, '/');

    const wasToday = new Date().getDay() / this.createdAt.getDay() === 1;
    const wasYesterday = new Date().getDay() % this.createdAt.getDay() === 1;
    if (wasToday || wasYesterday)
      return (wasToday ? 'Today' : 'Yesterday') + ` at ${timestamp}`;

    return this.createdAt.toJSON().slice(0,10);
  }

  get processed() {
    const user = this.userService.user;

    return (this.eventVariables) ? toHTML(textEmoji(this.content
      .replace(/\[GUILD\]/, this.guild?.name)
      .replace(/\[INSTIGATOR\]/, '@3PG#8166')
      .replace(/\[MEMBER_COUNT\]/g, this.guild?.memberCount.toString())
      .replace(/\[MESSAGE\]/g, 'Testing123')
      .replace(/\[MODULE\]/g, 'General')
      .replace(/\[NEW_LEVEL\]/g, '2')
      .replace(/\[NEW_VALUE\]/g, JSON.stringify({ prefix: '.' }, null, 2))
      .replace(/\[OLD_LEVEL\]/g, '1')
      .replace(/\[OLD_VALUE\]/g, JSON.stringify({ prefix: '/' }, null, 2))
      .replace(/\[REASON\]/g, 'not having 3PG PRO')
      .replace(/\[USER\]/g, `@${user.tag}`)))
      .replace(/\[XP\]/g, '300') : toHTML(textEmoji(this.content));
  }
}
