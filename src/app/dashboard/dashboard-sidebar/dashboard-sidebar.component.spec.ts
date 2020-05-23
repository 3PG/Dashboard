import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSidebarComponent } from './dashboard-sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { AppModule } from 'src/app/app.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MatSelect } from '@angular/material/select';

describe('DashboardSidebarComponent', () => {
  let component: DashboardSidebarComponent;
  let fixture: ComponentFixture<DashboardSidebarComponent>;
  let service: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSidebarComponent ],
      imports: [ AppModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    service = { changeTheme: () => {}, updateTheme: () => {} } as any;
    fixture = TestBed.createComponent(DashboardSidebarComponent);
    component = new DashboardSidebarComponent(service, null);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('change theme, calls changeTheme', () => {
    const spy = spyOn(service, 'changeTheme');
    const select = fixture.debugElement.query(By.directive(MatSelect)).componentInstance as MatSelect;

    select.writeValue('CHOCOLATE');

    expect(spy).toHaveBeenCalled();
  });
});
