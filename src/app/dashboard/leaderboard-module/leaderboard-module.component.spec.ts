import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LeaderboardModuleComponent } from './leaderboard-module.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../../app-routing.module';
import { AppModule } from 'src/app/app.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('LeaderboardModuleComponent', () => {
  let component: LeaderboardModuleComponent;
  let fixture: ComponentFixture<LeaderboardModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderboardModuleComponent ],
      imports: [ AppModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
