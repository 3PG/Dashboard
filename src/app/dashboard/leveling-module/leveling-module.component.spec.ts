import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelingModuleComponent } from './leveling-module.component';
import { AppModule } from 'src/app/app.module';
import { FormGroup } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('LevelingModuleComponent', () => {
  let component: LevelingModuleComponent;
  let fixture: ComponentFixture<LevelingModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelingModuleComponent ],
      imports: [ AppModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelingModuleComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
