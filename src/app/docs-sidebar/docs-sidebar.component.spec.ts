import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsSidebarComponent } from './docs-sidebar.component';
import { By } from '@angular/platform-browser';
import { MaterialModule } from '../material-module';
import { AppModule } from '../app.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('DocsSidebarComponent', () => {
  let component: DocsSidebarComponent;
  let fixture: ComponentFixture<DocsSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocsSidebarComponent ],
      imports: [ AppModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('on click, should open', () => {
    const spy = spyOn(component, 'toggle');
    const de = fixture.debugElement.query(By.css('.toggle'));

    de.nativeElement.click();

    expect(spy).toHaveBeenCalled();
  });
});
