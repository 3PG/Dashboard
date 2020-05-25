import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { toIterable } from '../utils';

@Component({
  selector: 'app-crates',
  templateUrl: './crates.component.html',
  styleUrls: ['./crates.component.css']
})
export class CratesComponent implements OnInit {
  error = '';
  reward = 'Open a crate';

  crates = [];
  preview = [
    { name: 'Nothing lol', url: 'assets/img/crates/nothing.webp' },
    { name: 'Vote Crate', url: 'assets/img/crates/vote-crate.webp' },
    { name: 'Tier 3 Legend Badge', url: 'assets/img/badges/legend.svg' },
    { name: 'Tier 2 Legend Badge', url: 'assets/img/badges/legend.svg' },
    { name: 'Tier 1 Legend Badge', url: 'assets/img/badges/legend.svg' },
    { name: '7 Days PRO', url: 'assets/img/pro.png' },
    { name: '1 Month PRO', url: 'assets/img/pro.png' },
    { name: '3 Months PRO', url: 'assets/img/pro.png' }
  ];

  constructor(
    private userService: UserService) {}

  async ngOnInit() {
    this.updateCrates();
  }

  async open() {
    const { given, type } = await this.userService.openCrate();
    this.handleReward(given, type);

    this.updateCrates();
    await this.userService.updateSavedUser();
  }

  private updateCrates() {
    this.crates = toIterable(this.userService.savedUser.crates);
  }

  handleReward(given: boolean, type: string) {
    this.error = (given) ? '' : 'But you already have it, or something better.';
    this.reward = `You got: ${type}!`;
  }
}
