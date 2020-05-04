import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningsModuleComponent } from './warnings-module.component';

describe('WarningsModuleComponent', () => {
  let component: WarningsModuleComponent;
  let fixture: ComponentFixture<WarningsModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningsModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
