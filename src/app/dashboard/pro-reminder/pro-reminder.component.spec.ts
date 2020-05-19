import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProReminderComponent } from './pro-reminder.component';
import { AppModule } from 'src/app/app.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ProReminderComponent', () => {
  let component: ProReminderComponent;
  let fixture: ComponentFixture<ProReminderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProReminderComponent ],
      imports: [ AppModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
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
