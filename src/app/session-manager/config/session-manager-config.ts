import { SessionStrategy } from '../strategy/session-strategy';

export interface SessionManagerConfig {
  storage: SessionStrategy;
}
