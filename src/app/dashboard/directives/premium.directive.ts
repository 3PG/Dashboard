import { Directive, Component, ElementRef } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Directive({
  selector: '[premium]'
})
export class PremiumDirective {
  el: HTMLElement;

  constructor(elementRef?: ElementRef) {
    if (!elementRef) return;

    this.el = elementRef.nativeElement as HTMLInputElement;
    this.el.onclick = () => alert('Unlock more with 3PG PRO!');
  }
}
