import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningsWidgetComponent } from './warnings-widget.component';
import { AppModule } from 'src/app/app.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('WarningsWidgetComponent', () => {
  let component: WarningsWidgetComponent;
  let fixture: ComponentFixture<WarningsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningsWidgetComponent ],
      imports: [ AppModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
