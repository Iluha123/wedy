import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  getListCountries() {
    console.log('ONE');
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }

}
