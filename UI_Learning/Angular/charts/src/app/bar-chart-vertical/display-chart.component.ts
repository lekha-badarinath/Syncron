import { Component, OnInit } from '@angular/core';
// import { GetDataService } from '../get-data.service';
import { FetchDataService } from '../fetch-data.service';

@Component({
  selector: 'app-display-chart',
  templateUrl: './display-chart.component.html',
  styleUrls: ['./display-chart.component.css']
})
export class DisplayChartComponent implements OnInit {
  // chart - vertical-bar
  single: any[];
  multi: any[];

  view: any[] = [700, 300];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Value';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  results = [];
  constructor(private userData: FetchDataService) {}

  display() {
    const userData$ = this.userData.getData();
    userData$.subscribe((data: any) => {
      this.results = data;
      console.log(this.results);
    });
  }
  ngOnInit() {
    this.display();
  }
}
