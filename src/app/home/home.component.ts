import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SEOService } from '../services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  version = environment.version;

  constructor(seo: SEOService) {
    seo.setTags({
      titleSuffix: 'Customizable Discord Bot',
      description: 'The all-in-one, highly customizable Discord bot. Announce, Auto-mod, Leveling, Music, Timers, and more! https://3pg.xyz',
      url: '/'
    });
  }
}
