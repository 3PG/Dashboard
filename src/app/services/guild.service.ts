import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GuildService {
  endpoint = environment.endpoint + '/guilds';
  
  singleton: APIGuild = null;

  private _guilds = [];
  get guilds() { return this._guilds; }

  private get key() {
    return localStorage.getItem('key');
  }

  constructor(private http: HttpClient) {}

  async init() {
    if (this.guilds.length <= 0)
      await this.updateGuilds();
  }

  async updateGuilds() {
    this._guilds = (this.key) ? 
      await this.http.get(`${this.endpoint}?key=${this.key}`).toPromise() as any : [];
  }

  getAPIGuild(id: string) {
    return this.http.get(`${this.endpoint}/${id}?key=${this.key}`).toPromise() as Promise<APIGuild>;    
  }

  getGuild(id: string) {
    return this.guilds?.find(g => g.id === id);
  }

  getMembers(id: string): Promise<any> {
    return this.http.get(`${this.endpoint}/${id}/members`).toPromise();
  }

  getWarnings(id: string): Promise<any> {
    return this.http.get(`${this.endpoint}/${id}/warnings`).toPromise();
  }

  getMessage(id: string, channelId: string, messageId: string): Promise<any> {    
    return this.http.get(`${this.endpoint}/${id}/channels/${channelId}/messages/${messageId}`).toPromise();
  }

  cancelTimer(id: string, timerIndex: number): Promise<any> {
    return this.http.get(`${this.endpoint}/${id}/timers/${timerIndex}/cancel?key=${this.key}`).toPromise();
  }

  updateGuild(id: string, module: string, value: any): Promise<any> {
    return this.http.put(`${this.endpoint}/${id}/${module}?key=${this.key}`, value).toPromise();
  }
  
  restoreDefaults(id: string) {
    return this.http.delete(`${this.endpoint}/${id}?key=${this.key}`).toPromise();
  }
}

export interface APIGuild {
  channels: any[];
  guild: any;
  log: {
    _id: string;
    changes: any[];
    commands: any[];
  }
  saved: any;
  status: { hasAdmin: boolean; }
  roles: any[];
  timers: any[];
}