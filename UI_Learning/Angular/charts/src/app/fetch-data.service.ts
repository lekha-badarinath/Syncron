import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  constructor(private http: HttpClient) {}

  getData() {
    const userData = this.http.get('http://localhost:3000/data');
    return userData;
  }
}
