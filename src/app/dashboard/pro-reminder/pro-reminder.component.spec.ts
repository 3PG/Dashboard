import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProReminderComponent } from './pro-reminder.component';

describe('ProReminderComponent', () => {
  let component: ProReminderComponent;
  let fixture: ComponentFixture<ProReminderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProReminderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
