import { TestBed } from '@angular/core/testing';

import { DashboardAuthGuard } from './dashboard-auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { AppModule } from '../app.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('DashboardAuthGuard', () => {
  let guard: DashboardAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
  });

  it('should be created', () => {
    const fakeAuth = {
      updateUser: () => {},
      user: null
    } as any;
    guard = new DashboardAuthGuard(fakeAuth, {} as any);

    expect(guard).toBeTruthy();
  });

  it('null user is denied', async () => {
    const fakeAuth = {
      updateUser: () => {},
      user: null
    } as any;
    guard = new DashboardAuthGuard(fakeAuth, {} as any);

    const result = await guard.canActivate();

    expect(result).toBeFalsy();
  });

  it('existing user is not denied', async () => {
    const fakeAuth = {
      updateUser: () => {},
      user: {}
    } as any;
    guard = new DashboardAuthGuard(fakeAuth, {} as any);

    const result = await guard.canActivate();

    expect(result).toBeTruthy();
  });
});
