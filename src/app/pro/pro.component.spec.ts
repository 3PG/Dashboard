import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProComponent } from './pro.component';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

describe('ProComponent', () => {
  let component: ProComponent;
  let fixture: ComponentFixture<ProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProComponent ],
      imports: [
        HttpClientModule
      ]
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

  it('click pay button, calls checkout', async(done) => {
    const spy = spyOn(component, 'checkout');
    const de = fixture.debugElement.query(By.css('.checkout'));
    
    (de.nativeElement as HTMLElement).setAttribute('type', 'button');
    de.nativeElement.click();

    await expectAsync(spy).toBeResolved();
    done();
  });

  it('pay button, user not logged in, contains login text', () => {
    const de = fixture.debugElement.query(By.css('button'));
    const el = de.nativeElement as HTMLElement;

    expect(el.innerText).toContain('Login');
  });

  it('pay button, user logged in and not premium, contains level up text', () => {
    const de = fixture.debugElement.query(By.css('button'));
    const el = de.nativeElement as HTMLElement;

    expect(el.innerText).toContain('Level Up');
  });

  it('pay button, user logged in and premium, contains donate text', () => {
    const de = fixture.debugElement.query(By.css('button'));
    const el = de.nativeElement as HTMLElement;

    expect(el.innerText).toContain('Donate');
  });
});
