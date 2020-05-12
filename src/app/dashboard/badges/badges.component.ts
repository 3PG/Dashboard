import { Component } from '@angular/core';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.css']
})
export class BadgesComponent {
  badges = [Badge.Alpha, Badge.BugDestroyer, Badge.EarlySupporter, Badge.Pro];
}

export enum Badge {
  Alpha = 'ALPHA',
  BugDestroyer = 'BUG_DESTROYER',
  EarlySupporter = 'EARLY_SUPPORTER',
  Pro = 'PRO'
}
