import {Injectable} from '@angular/core';
import {StorageService} from './storage.service';

@Injectable()
export class GlobalDataService {
  data: any = {};

  constructor(private storage: StorageService) {

    this.init();
  }

  init(): void {
    const data: any = this.storage.get('data');
    if (data) {
      this.data = data;
    }
  }

  set(data: any): void {
    if (data) {
      this.data = data;
      this.storage.set('data', data);
    }
  }

  get(): any {
    return this.data;
  }

}
