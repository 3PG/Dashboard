import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crates',
  templateUrl: './crates.component.html',
  styleUrls: ['./crates.component.css']
})
export class CratesComponent implements OnInit {
  crates = [];
  preview = [
    { name: 'Nothing lol', url: 'assets/img/crates/nothing.webp' },
    { name: 'Vote Crate', url: 'assets/img/crates/vote-crate.webp' },
    { name: 'Tier 3 Legend Badge', url: 'assets/img/badges/legend.svg' },
    { name: '7 Days PRO', url: 'assets/img/pro.png' },
    { name: 'Tier 2 Legend Badge', url: 'assets/img/badges/legend.svg' },
    { name: '1 Month PRO', url: 'assets/img/pro.png' },
    { name: 'Tier 1 Legend Badge', url: 'assets/img/badges/legend.svg' },
    { name: '3 Months PRO', url: 'assets/img/pro.png' }
  ];

  ngOnInit() {
  }
}
