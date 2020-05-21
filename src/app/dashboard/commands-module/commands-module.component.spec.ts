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
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('reset should return object to initial state', async() => {  
    component.originalSavedGuild = {
      commands: {
        configs: []
      }
    }; 

    await component.reset();

    expect(component.form.value).toEqual(component.originalSavedGuild.commands);
  });
});
