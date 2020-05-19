import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuildSidebarComponent } from './guild-sidebar.component';
import { AppModule } from 'src/app/app.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('GuildSidebarComponent', () => {
  let component: GuildSidebarComponent;
  let fixture: ComponentFixture<GuildSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuildSidebarComponent ],
      imports: [ AppModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuildSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('if no guild naviate to dashboard', () => {
  });
});
