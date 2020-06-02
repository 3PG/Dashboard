import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.css']
})
export class BadgesComponent implements OnInit {
  badges: BadgeStyle[] = [
    {
      description: 'Tested 3PG Alpha',
      type: BadgeType.Alpha,
      url: 'assets/img/badges/alpha.svg'
    },
    {
      description: 'Destroyed a few bugs',
      type: BadgeType.BugDestroyer,
      url: 'assets/img/badges/bug-destroyer.svg' 
    },
    {
      description: 'Supported 3PG before June 2020',
      type: BadgeType.EarlySupporter,
      url: 'assets/img/badges/early-supporter.svg' 
    },
    {
      description: 'Purchase 3PG PRO, at least once',
      type: BadgeType.Pro,
      url: 'assets/img/pro.png'
    },
    {
      description: 'Found in a voting crate',
      type: BadgeType.Legend,
      url: 'assets/img/badges/legend.svg'
    }
  ];

  constructor(private userService: UserService) {}

  ngOnInit() {
    for (const style of this.badges) {
      const badge = this.userService.savedUser.badges
        ?.some(b => b.type === style.type.toString());      
      if (!badge) continue;

      style.active = true;
      style.tier = badge.tier;
    }
  }
}

export interface BadgeStyle {
  type: string,
  url: string,
  description: string;
  active?: any;
  tier?: number;
}

export enum BadgeType {
  Alpha = 'ALPHA',
  BugDestroyer = 'BUG_DESTROYER',
  EarlySupporter = 'EARLY_SUPPORTER',
  Legend = 'LEGEND',
  Pro = 'PRO'
}
