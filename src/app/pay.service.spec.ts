import { TestBed } from '@angular/core/testing';

import { PayService } from './pay.service';
import { HttpClientModule } from '@angular/common/http';
import { AppModule } from './app.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PayService', () => {
  let service: PayService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
    service = TestBed.inject(PayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
