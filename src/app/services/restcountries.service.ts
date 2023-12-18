import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import countries from 'world-countries';

export interface Country{
  name: string;
  nativeName: string;
  alpha2Code: string;
  latlng: number[];
  flag: string;
}

@Injectable({
  providedIn: 'root'
})
export class RestcountriesService {

  constructor(private http: HttpClient) { }

  getCountryByCode(code: string): Country {
    for ( const country of countries ){
      if (code === country.cca2){
        return {
          name: country.name.common,
          alpha2Code: country.cca2,
          latlng: country.latlng,
          nativeName: "",
          flag: country.flag,
        };
      }
    }
    return null;
  }

  getCountries(term: string): Observable<Country[]> {
    const list = [];
    for ( const country of countries ){
      if (country.name.common.toLowerCase().indexOf(term.toLowerCase()) >= 0){
        const c: Country = {
          name: country.name.common,
          alpha2Code: country.cca2,
          latlng: country.latlng,
          nativeName: "",
          flag: country.flag,
        }
        list.push(c);
      }
    }
    return from([list]);
  }
}
