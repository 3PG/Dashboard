import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveChangesComponent } from './save-changes.component';
import { By } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Overlay } from '@angular/cdk/overlay';
import { AppModule } from 'src/app/app.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SaveChangesComponent', () => {
  let component: SaveChangesComponent;
  let fixture: ComponentFixture<SaveChangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveChangesComponent ],
      imports: [ AppModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('click button, snackbar closes', () => {
    const button = fixture.debugElement.query(By.css('button'));
    const spy = spyOn(component, 'close');
    
    button.nativeElement.click();

    expect(spy).toHaveBeenCalled();
  });

  it('click reset button, calls reset', () => {
    const button = fixture.debugElement.query(By.css('#reset'));
    const spy = spyOn(component, 'reset');
    
    button.nativeElement.click();

    expect(spy).toHaveBeenCalled();
  });

  it('click save button, calls save', () => {
    const button = fixture.debugElement.query(By.css('#save'));
    const spy = spyOn(component, 'save');
    
    button.nativeElement.click();

    expect(spy).toHaveBeenCalled();
  });
});
