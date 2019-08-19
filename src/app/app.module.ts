import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SessionManagerModule } from './session-manager/session-manager.module';
import { SessionManagerConfig } from './session-manager/config/session-manager-config';
import { LocalStorage } from './session-manager/storages/local-storage';
import { SessionStorage } from './session-manager/storages/session-storage';

export const customConfig: SessionManagerConfig = {
  storage: new LocalStorage() // LocalStorage or SessionStorage
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SessionManagerModule.forRoot(customConfig)],
  bootstrap: [AppComponent]
})
export class AppModule {}
