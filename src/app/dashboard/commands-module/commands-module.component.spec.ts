import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandsModuleComponent } from './commands-module.component';
import { AppModule } from 'src/app/app.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CommandsModuleComponent', () => {
  let component: CommandsModuleComponent;
  let fixture: ComponentFixture<CommandsModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandsModuleComponent ],
      imports: [ AppModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandsModuleComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('reset should return object to initial state', async() => {
    // await component.init();
    
    const previousValue = component.form.value;

    component.savedGuild = { commands: { configs: [] }};
    component.form.setValue({ configs: [] });
    await component.reset();

    expect(component.form.value).toEqual(previousValue);
  });
});
