import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimersModuleComponent } from './timers-module.component';
import { By } from '@angular/platform-browser';
import { AppModule } from 'src/app/app.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TimersModuleComponent', () => {
  let component: TimersModuleComponent;
  let fixture: ComponentFixture<TimersModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimersModuleComponent ],
      imports: [ AppModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimersModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('clicking timer cancel calls reset', () => {
    const spy = spyOn(component, 'reset');
    
    component.schedule.push({});
    const de = fixture.debugElement.query(By.css('cancel-timer'));

    de.nativeElement.click();

    expect(spy).toHaveBeenCalled();
  });

  it('filterFormValue removes disabled events', () => {
    component.form = component.buildForm({ timers: {
      commandTimers: [{
        enabled: false,
        interval: '01:00',
        from: new Date(),
        command: '',
        channel: ''
      }],
      messageTimers: [{
        enabled: false,
        interval: '01:00',
        from: new Date(),
        message: '',
        channel: ''
      }],
    }});

    component.filterFormValue();

    const result = component.form.value.commandTimers.length + component.form.value.messageTimers.length;

    expect(result).toBe(0);
  })
});
