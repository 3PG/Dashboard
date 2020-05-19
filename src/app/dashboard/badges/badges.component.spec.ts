import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgesComponent } from './badges.component';
import { AppModule } from 'src/app/app.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('BadgesComponent', () => {
  let component: BadgesComponent;
  let fixture: ComponentFixture<BadgesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgesComponent ],
      imports: [ AppModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
