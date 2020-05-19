import { TestBed } from '@angular/core/testing';

import { CommandsService } from './commands.service';
import { HttpClientModule } from '@angular/common/http';
import { AppModule } from '../app.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CommandsService', () => {
  let service: CommandsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
    service = TestBed.inject(CommandsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
