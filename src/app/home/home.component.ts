import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  version = 'Bot + Dashboard v2.0.0a';

  ngOnInit(): void {
    document.title = '3PG - Discord Bot';
  }
}
