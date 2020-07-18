import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsModuleComponent, LogEvent, EventType } from './logs-module.component';
import { FormArray } from '@angular/forms';
import { AppModule } from 'src/app/app.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AnnounceModuleComponent', () => {
  let component: LogsModuleComponent;
  let fixture: ComponentFixture<LogsModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogsModuleComponent ],
      imports: [ AppModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.init = async() => {};
    component.savedGuild = { announce: { events: {}}};
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('saved guild overwrites default input values', () => {
    const events = [
    {
      event: EventType.MemberJoin,
      channel: '123',
      message: 'a'
    } as LogEvent ];
    component.savedGuild = { announce: { events }};

    const result = (component.form.get('events') as FormArray).get('0').value;

    expect(result).toEqual(events[0]);
  });

  it('submitting removes enabled property', () => {
    component = new LogsModuleComponent({} as any, {} as any, {} as any, {} as any);
    const events = [
    {
      event: EventType.MemberJoin,
      channel: '123',
      enabled: false,
      message: 'a'
    } as LogEvent ];

    component.form.setValue({ events });
    component.submit();

    const result = component.form.get('events').get('0').value.enabled;

    expect(result).toBeUndefined();
  });
});
