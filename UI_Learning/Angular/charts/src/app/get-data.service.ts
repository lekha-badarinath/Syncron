import { Injectable } from '@angular/core';
// import charts_data from '../../src/assets/charts_data.json';
@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  data = [
    {
      name: 'Germany',
      value: 40632
    },
    {
      name: 'United States',
      value: 49737
    },
    {
      name: 'France',
      value: 36745
    },
    {
      name: 'United Kingdom',
      value: 36240
    },
    {
      name: 'Spain',
      value: 33000
    },
    {
      name: 'Italy',
      value: 35800
    }
  ];
  constructor() {}
  sendData() {
    return this.data;
  }
}
