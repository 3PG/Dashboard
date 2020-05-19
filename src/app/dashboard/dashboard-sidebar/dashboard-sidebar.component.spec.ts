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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSidebarComponent ],
      imports: [ AppModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('change theme, calls changeTheme', () => {
    const service = { changeTheme: () => {} } as any;
    component = new DashboardSidebarComponent(service, null);
    
    const spy = spyOn(service, 'changeTheme');
    const select = fixture.debugElement.query(By.directive(MatSelect)).componentInstance as MatSelect;

    select.value = 'CHOCOLATE';

    expect(spy).toHaveBeenCalled();
  });
});
