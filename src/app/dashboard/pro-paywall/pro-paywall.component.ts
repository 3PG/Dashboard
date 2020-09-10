import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'pro-paywall',
  templateUrl: './pro-paywall.component.html',
  styleUrls: ['./pro-paywall.component.css']
})
export class ProPaywallComponent {
  constructor(public userService: UserService) {}
}
