import { Component, OnInit, Input } from '@angular/core';
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
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  results = [];
  @Input() chartOption;
  constructor(private userData: FetchDataService) {}

  display() {
    const userData$ = this.userData.getData();
    userData$.subscribe((data: any) => {
      this.results = data;
      console.log(this.results);
    });
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

      case 'pie':
        console.log('Switch case is working, we are in the pie block');
    }
  }

  ngOnChanges() {
    this.selectFunction();
  }
  ngOnInit() {
    this.display();
  }
}
