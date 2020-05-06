import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningsWidgetComponent } from './warnings-widget.component';

describe('WarningsWidgetComponent', () => {
  let component: WarningsWidgetComponent;
  let fixture: ComponentFixture<WarningsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningsWidgetComponent ]
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
