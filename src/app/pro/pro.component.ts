import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { PayService } from '../services/pay.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-pro',
  templateUrl: './pro.component.html',
  styleUrls: ['./pro.component.css']
})
export class ProComponent implements OnInit {
  checkoutEndpoint = `${environment.endpoint}/pay`;
  stripe: Stripe;

  constructor(
    private pay: PayService,
    public userService: UserService) {}

  async ngOnInit() {
    await this.userService.updateSavedUser();
    this.stripe = await loadStripe(environment.stripePublicKey);
  }

  async checkout() {
    const { id } = await this.pay.createSession();
    await this.stripe.redirectToCheckout({ sessionId: id });
  }
}
