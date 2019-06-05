import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  constructor(private http: HttpClient) {}

  getData() {
    const createObservable = this.http.get(
      'https://www.reddit.com/r/javascript.json'
    );
    return createObservable;
  }

  showData() {
    this.getData().subscribe((data: any) => {
      console.log(data);
    });
  }
  ngOnInit() {
    this.showData();
  }
}
