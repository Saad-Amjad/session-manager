import { SessionStrategy } from '../strategy/session-strategy';

export class LocalStorage implements SessionStrategy {
  constructor() {
    this.init();
  }

  public init(): void {
    console.log('Local Storage Initialized');
  }

  public getStorage() {
    return window.localStorage;
  }

  public get(key: string): any {
    return this.getStorage().getItem(key);
  }

  public set(key: string, value: string) {
    return this.getStorage().setItem(key, value);
  }

  public remove(key: string): void {
    return this.getStorage().removeItem(key);
  }
  public removeAll() {
    return this.getStorage().clear();
  }
}
