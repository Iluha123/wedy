import {Injectable} from '@angular/core';

@Injectable()
export class StorageService {
  constructor() {}

  /**
   * LocalStorage GetItem
   * @param {String} key
   * @return {*}
   */
  get(key: string) {
    this.checkKey(key);
    return JSON.parse(localStorage.getItem('WOMY_' + key));
  }

  /**
   * LocalStorage SetItem
   * @param {String} key
   * @param {*} value
   */
  set(key: string, value: any) {
    this.checkKey(key);
    localStorage.setItem('WOMY_' + key, JSON.stringify(value));
  }

  /**
   * LocalStorage RemoveItem
   * @param {String} key
   */
  remove( key: string ) {
    this.checkKey(key);
    localStorage.removeItem('WOMY_' + key);
  }

  /**
   * LocalStorage ClearAllItems
   */
  clear() {
    localStorage.clear();
  }

  /**
   * Check for a key property
   */
  checkKey(key: string) {
    if (!key) {
      throw ("'key' is not defined");
    }
  }


}
