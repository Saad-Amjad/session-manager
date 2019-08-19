export interface SessionStrategy {
  init();
  get(key: string);
  set(key: string, value: string);
  remove(key: string);
  removeAll();
}
