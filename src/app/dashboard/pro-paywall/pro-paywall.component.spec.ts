import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProPaywallComponent } from './pro-paywall.component';

describe('PlusPaywallComponent', () => {
  let component: ProPaywallComponent;
  let fixture: ComponentFixture<ProPaywallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProPaywallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProPaywallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
