import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CratesComponent } from './crates.component';
import { AppModule } from '../app.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CratesComponent', () => {
  let component: CratesComponent;
  let fixture: ComponentFixture<CratesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CratesComponent ],
      imports: [ AppModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CratesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('click open button, calls open crate', () => {
    const spy = spyOn(component, 'open');
    const el = fixture.debugElement.query(By.css('#open')).nativeElement;

    el.click();

    expectAsync(spy).toBeResolved();
  });

  it('given reward')
});
