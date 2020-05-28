import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  statusURL = 'https://3pg.statuspage.io';
  version = environment.version;

  ngOnInit(): void {
    document.title = '3PG - Discord Bot';
  }
}
