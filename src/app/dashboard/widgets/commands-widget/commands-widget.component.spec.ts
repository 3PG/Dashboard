import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandsWidgetComponent } from './commands-widget.component';
import { AppModule } from 'src/app/app.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CommandsWidgetComponent', () => {
  let component: CommandsWidgetComponent;
  let fixture: ComponentFixture<CommandsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandsWidgetComponent ],
      imports: [ AppModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandsWidgetComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('build labels returns last 7 days as string date', () => {
    const result = component.buildLabels()[0];
    const date = new Date(2000, 0, 0)

    const expected = `31/12`;
    expect(result).toBe(expected);
  });
});
