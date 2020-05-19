import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberUsernameComponent } from './member-username.component';
import { AppModule } from '../app.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MemberUsernameComponent', () => {
  let component: MemberUsernameComponent;
  let fixture: ComponentFixture<MemberUsernameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberUsernameComponent ],
      imports: [ AppModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberUsernameComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
