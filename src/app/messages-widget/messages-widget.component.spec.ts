import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesWidgetComponent } from './messages-widget.component';

describe('MessagesWidgetComponent', () => {
  let component: MessagesWidgetComponent;
  let fixture: ComponentFixture<MessagesWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
