import { TestBed } from '@angular/core/testing';

import { CanDeactivateDashboard } from './can-deactivate-dashboard.guard';
import { AppModule } from '../app.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SaveChangesGuard', () => {
  let guard: CanDeactivateDashboard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
    guard = TestBed.inject(CanDeactivateDashboard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
