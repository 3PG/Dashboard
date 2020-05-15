import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelingModuleComponent } from './leveling-module.component';
import { AppModule } from 'src/app/app.module';
import { FormGroup } from '@angular/forms';

describe('XPModuleComponent', () => {
  let component: LevelingModuleComponent;
  let fixture: ComponentFixture<LevelingModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelingModuleComponent ],
      imports: [ AppModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelingModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('buildForm returns valid form group', () => {
    expect(component.buildForm({})).toBeInstanceOf(FormGroup);
  });

  it('initFormValues sets saved guild values', () => {
    component.buildForm({ xp: { ignoredRoles: ['1'] }});

    const result = component.form.get('ignoredRoles').value;

    expect(result).toBe(['1']);
  })
});
