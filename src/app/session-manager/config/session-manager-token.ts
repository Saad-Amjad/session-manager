import { InjectionToken } from '@angular/core';
import { SessionManagerConfig } from './session-manager-config';

export const configService = new InjectionToken<SessionManagerConfig>('config');
