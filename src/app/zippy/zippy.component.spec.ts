import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZippyComponent } from './zippy.component';
import { AppModule } from '../app.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ZippyComponent', () => {
  let component: ZippyComponent;
  let fixture: ComponentFixture<ZippyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZippyComponent ],
      imports: [ AppModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZippyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
