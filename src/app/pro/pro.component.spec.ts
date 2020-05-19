import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProComponent } from './pro.component';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppModule } from '../app.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ProComponent', () => {
  let component: ProComponent;
  let fixture: ComponentFixture<ProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProComponent ],
      imports: [ AppModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('click pay button, calls checkout', () => {
    const spy = spyOn(component, 'checkout');
    const de = fixture.debugElement.query(By.css('.checkout'));
    
    (de.nativeElement as HTMLElement).setAttribute('type', 'button');
    de.nativeElement.click();

    expectAsync(spy).toBeResolved();
  });

  it('pay button, user not logged in, contains login text', () => {
    const de = fixture.debugElement.query(By.css('button'));
    const el = de.nativeElement as HTMLElement;

    expect(el.innerText).toContain('Login');
  });

  it('pay button, user logged in and not premium, contains level up text', () => {
    component.userService = { savedUser: { premium: false } } as any;

    const de = fixture.debugElement.query(By.css('button'));
    const el = de.nativeElement as HTMLElement;

    expect(el.innerText).toContain('Go');
  });

  it('pay button, user logged in and premium, contains donate text', () => {
    component.userService = { savedUser: { premium: true } } as any;

    const de = fixture.debugElement.query(By.css('button'));
    const el = de.nativeElement as HTMLElement;

    expect(el.innerText).toContain('Already');
  });
});
