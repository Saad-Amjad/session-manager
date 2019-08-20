import { Injectable, Inject } from '@angular/core';
import { configService } from './config/session-manager-token';
import { SessionContext } from './strategy/session-context';
import { SessionStrategy } from './strategy/session-strategy';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  public static session: SessionStrategy;
  private context: SessionContext;

  constructor(@Inject(configService) public config) {
    const storage = new config.storage();
    this.context = new SessionContext(storage);
    SessionService.session = this.context.loadStorage();
  }

  public getAccessToken(): string {
    return SessionService.session.get('access_token');
  }

  public setAccessToken(value: string): void {
    return SessionService.session.set('access_token', value);
  }
}
