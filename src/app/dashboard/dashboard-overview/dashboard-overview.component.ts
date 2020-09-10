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
  users = [];
  errorMessage: string;

  form = new FormGroup({
    tag: new FormControl('', [ Validators.required, Validators.pattern(/^.+#\d{4}/) ])
  });

  get user() { return this.userService.user; }

  constructor(public userService: UserService) {
    document.title = '3PG - Dashboard';
  }

  async submit() {
    try {
      if (this.form.invalid) return;

      await this.userService.referUser(this.form.value.tag);
      await this.userService.updateSavedUser();

      this.errorMessage = null;
    } catch (error) {
      console.log(error);
      this.errorMessage = error?.error?.message ?? 'An unknown error occurred.';
    }
  }

  async ngOnInit() {
    for (const id of this.userService.savedUser.referralIds) {
      const user = await this.userService.getUser(id);
      this.users.push(user);
    }
  }

  getUser(id: string) {
    return this.users.find(u => u.id === id);
  }
}
