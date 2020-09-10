import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard-overview.component.html',
  styleUrls: ['./dashboard-overview.component.css']
})
export class DashboardOverviewComponent {
  voteURLs = environment.voteURLs;

  form = new FormGroup({
    tag: new FormControl('', [ Validators.required, Validators.pattern(/^.+#\d{4}/) ])
  });

  get user() { return this.userService.user; }

  constructor(public userService: UserService) {
    document.title = '3PG - Dashboard';
  }

  async submit() {
    try {
      await this.userService.referUser(this.form.value.tag);

      await this.userService.updateSavedUser();
    } catch (error) {
      console.log(error);      
      alert(error?.error?.message ?? 'An unknown error occurred.')
    }
  }
}
