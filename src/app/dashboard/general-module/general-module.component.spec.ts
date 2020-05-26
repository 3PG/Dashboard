import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralModuleComponent } from './general-module.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from '../../app-routing.module';
import { environment } from 'src/environments/environment';
import { AppModule } from 'src/app/app.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

describe('GeneralModuleComponent', () => {
  let component: GeneralModuleComponent;
  let fixture: ComponentFixture<GeneralModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralModuleComponent ],
      imports: [ AppModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralModuleComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('filterFormValue, all reactionRoles values are falsey, filtered', () => {
    component.form = new FormGroup({
      reactionRoles: new FormControl([{ a: '', b: '' }])
    });

    component.filterFormValue();

    expect(component.form.value.reactionRoles.length).toBe(0);
  });

  it('filterFormValue, not all reactionRoles values are falsey, not filtered', () => {
    component.form = new FormGroup({
      reactionRoles: new FormControl([{ a: 'a', b: '' }])
    });

    component.filterFormValue();

    expect(component.form.value.reactionRoles.length).toBe(1);
  });
});
