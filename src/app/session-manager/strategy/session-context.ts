import { SessionStrategy } from './session-strategy';

export class SessionContext {
  public sessionStrategy: SessionStrategy;

  constructor(sessionStrategy: SessionStrategy) {
    this.sessionStrategy = sessionStrategy;
  }

  public loadStorage() {
    return this.sessionStrategy;
  }
}
