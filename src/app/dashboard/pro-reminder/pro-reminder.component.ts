import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'pro-reminder',
  templateUrl: './pro-reminder.component.html',
  styleUrls: ['./pro-reminder.component.css']
})
export class ProReminderComponent implements OnInit {
  hasPremium = false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.hasPremium = this.userService.savedUser?.premium;
  }
}
