import { Component, OnInit, Input } from '@angular/core';
// import { GetDataService } from '../get-data.service';
import { FetchDataService } from '../fetch-data.service';
import {Observable} from 'rxjs';

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
  isVertical = false;
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
    domain: ['#FFF089', '#FFAD75', '#B5F4BC', '#A5FFE0']
  };

  results: Observable<any>;
  @Input() chartOption;
  constructor(private userData: FetchDataService) {}

  display() {
    this.results = this.userData.getData();
  }

  toggleFunction() {
    this.isVertical = !this.isVertical;
  }

  selectFunction() {
    switch (this.chartOption) {
      case 'horizontal':
        console.log('Switch case is working, we are in the horizontal block');
        // this.isVertical = false;
        break;
      case 'vertical':
        console.log('Switch case is working, we are in the vertical block');
        // this.isVertical = true;
        break;

      case 'pie':
        console.log('Switch case is working, we are in the pie block');
        break;
    }
  }

  xAxisToggle() {
    this.showXAxis = !this.showXAxis;
  }

  yAxisToggle() {
    this.showYAxis = !this.showYAxis;
  }

  ngOnChanges() {
    this.selectFunction();
  }
  ngOnInit() {
    this.display();
  }
}
