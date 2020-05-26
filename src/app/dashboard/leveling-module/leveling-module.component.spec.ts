import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelingModuleComponent } from './leveling-module.component';
import { AppModule } from 'src/app/app.module';
import { FormGroup, FormControl } from '@angular/forms';
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

  it('filterFormValue, levelRoles level is 0, filtered', () => {
    component.form = new FormGroup({
      levelRoles: new FormControl([{ level: 0 }])
    });

    component.filterFormValue();

    expect(component.form.value.levelRoles.length).toBe(0);
  });

  it('filterFormValue, levelRoles level greater than 0, not filtered', () => {
    component.form = new FormGroup({
      levelRoles: new FormControl([{ level: 1 }])
    });

    component.filterFormValue();

    expect(component.form.value.levelRoles.length).toBe(1);
  });
});
