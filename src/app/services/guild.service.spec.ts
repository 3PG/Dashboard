import { TestBed } from '@angular/core/testing';

import { GuildService } from './guild.service';
import { HttpClientModule } from '@angular/common/http';
import { AppModule } from '../app.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('GuildService', () => {
  let service: GuildService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
    service = TestBed.inject(GuildService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
