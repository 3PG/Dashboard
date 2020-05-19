import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoModModuleComponent } from './auto-mod-module.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../../app-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MaterialModule } from '../../material-module';
import { AppModule } from 'src/app/app.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AutoModModuleComponent', () => {
  let component: AutoModModuleComponent;
  let fixture: ComponentFixture<AutoModModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoModModuleComponent ],
      imports: [ AppModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoModModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
