import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningsModuleComponent } from './warnings-module.component';
import { AppModule } from 'src/app/app.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('WarningsModuleComponent', () => {
  let component: WarningsModuleComponent;
  let fixture: ComponentFixture<WarningsModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningsModuleComponent ],
      imports: [ AppModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningsModuleComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
