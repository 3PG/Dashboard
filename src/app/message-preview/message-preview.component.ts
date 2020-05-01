import { Component, Input } from '@angular/core';
import { toHTML } from 'discord-markdown';
import { textEmoji } from 'markdown-to-text-emoji';

@Component({
  selector: 'message-preview',
  templateUrl: './message-preview.component.html',
  styleUrls: ['./message-preview.component.css']
})
export class MessagePreviewComponent {
  @Input() content = 'Hello World';
  @Input() username = '3PG';
  @Input() avatarURL = 'https://cdn.discordapp.com/avatars/525935335918665760/6e0b19ae2cc25ef5da3d52b787525ed3.png?size=128';

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
    return toHTML(textEmoji(this.content
      .replace(/\[GUILD\]/, 'Test Guild')
      .replace(/\[MEMBER_COUNT\]/g, '420')
      .replace(/\[MESSAGE\]/g, 'Testing123')
      .replace(/\[REASON\]/g, 'not having 3PG PRO')
      .replace(/\[USER\]/g, '<@!123456789123456789>')));
  }
}
