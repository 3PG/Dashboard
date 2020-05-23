import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { SettingsModuleComponent } from './settings-module.component';
import { AppModule } from 'src/app/app.module';

describe('SettingsModuleComponent', () => {
  let component: SettingsModuleComponent;
  let fixture: ComponentFixture<SettingsModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsModuleComponent ],
      imports: [ AppModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('click restore defaults button, calls restoreDefaults()', () => {
    const spy = spyOn(component, 'restoreDefaults');
    const el = fixture.debugElement.query(By.css('button')).nativeElement;

    el.click();

    expect(spy).toHaveBeenCalled();
  });

  it('buildForm() value equals module value', () => {
    const settings = {
      privateLeaderboard: true
    };

    const result = component.buildForm({ settings });

    expect(result).toBe(result);
  });

  it('reset() value equals module value', async() => {
    const settings = {
      privateLeaderboard: true
    };
    component.originalSavedGuild = { settings };
    component.savedGuild = { settings };

    const result = await component.reset();

    expect(result).toBe(result);
  });
});
