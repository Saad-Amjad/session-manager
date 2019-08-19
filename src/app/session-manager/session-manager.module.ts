import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionService } from './session.service';
import { SessionManagerConfig } from './config/session-manager-config';
import { configService } from './config/session-manager-token';
import { LocalStorage } from './storages/local-storage';
import { SessionStorage } from './storages/session-storage';

@NgModule({
  imports: [CommonModule]
})
export class SessionManagerModule {
  static forRoot(config?: SessionManagerConfig): ModuleWithProviders {
    return {
      ngModule: SessionManagerModule,
      providers: [
        SessionService,
        LocalStorage,
        SessionStorage,
        {
          provide: configService,
          useValue: config
        }
      ]
    };
  }
}
