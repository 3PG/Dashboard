import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditLogWidgetComponent } from './audit-log-widget.component';
import { AppModule } from 'src/app/app.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AuditLogWidgetComponent', () => {
  let component: AuditLogWidgetComponent;
  let fixture: ComponentFixture<AuditLogWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditLogWidgetComponent ],
      imports: [ AppModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditLogWidgetComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
