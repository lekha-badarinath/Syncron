import { Component, OnInit } from '@angular/core';
// import { GetDataService } from '../get-data.service';
import { FetchDataService } from '../fetch-data.service';

@Component({
  selector: 'app-display-chart',
  templateUrl: './display-chart.component.html',
  styleUrls: ['./display-chart.component.css']
})
export class DisplayChartComponent implements OnInit {
  constructor(private userData: FetchDataService) {}
  view: any = [700, 800];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Number';
  showYAxisLabel = true;
  yAxisLabel = 'Value';
  timeline = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;

  display() {
    const userData$ = this.userData.getData();
    userData$.subscribe((data: any) => {
      console.log(data);
    });
  }
  ngOnInit() {
    this.display();
  }
}
