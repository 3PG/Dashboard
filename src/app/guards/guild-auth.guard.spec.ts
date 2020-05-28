import { TestBed } from '@angular/core/testing';

import { GuildAuthGuard } from './guild-auth.guard';
import { AppModule } from '../app.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('GuildAuthGuard', () => {
  let guard: GuildAuthGuard;
  let guildService: any;
  let userService: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });

    userService = {
      savedUser: {},
      user: {},

      updateUser: async() => {},
      updateSavedUser: async() => {}
    };
    
    guildService = {
      singleton: { guildId: '123' },
      guilds: [],

      updateGuilds: async() => {}
    };
    
    guard = new GuildAuthGuard(guildService, userService, {} as any);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('user not in guild, returns false', async() => {
    guildService.guilds.push({ id: '123' });

    const result = await guard.canActivate({
      paramMap: new Map().set('id', '321')
    } as any);

    expect(result).toBeFalse();
  });

  it('user in guild and is manager, returns true', async() => {
    guildService.guilds.push({ id: '123' });

    const result = await guard.canActivate({
      paramMap: new Map().set('id', '123')
    } as any);

    expect(result).toBeTrue();
  });
});
