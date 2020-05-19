import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuildComponent } from './guild.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../../app-routing.module';
import { AppModule } from 'src/app/app.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('GuildComponent', () => {
  let component: GuildComponent;
  let fixture: ComponentFixture<GuildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuildComponent ],
      imports: [ AppModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
