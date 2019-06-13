import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  constructor(private http: HttpClient) {}

  public async getData() {
    const response = await this.http.get('http://localhost:3000/data').toPromise();
    return response;

  }

  public async getComplexData() {
    return await this.http.get('http://localhost:3000/data_complex').toPromise();

  }

}
