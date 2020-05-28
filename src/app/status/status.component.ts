import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  ngOnInit() {
    const embed = document.getElementsByName('embed')[0] as HTMLEmbedElement;
    // embed.ownerDocument.gete;
  }
}
