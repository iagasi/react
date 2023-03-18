export class LocalStorage {
  static set(value: string) {
    localStorage.setItem('input', value);
  }

  static get() {
    const item = localStorage.getItem('input');
    return item;
  }
}
