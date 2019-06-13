import { Component, OnInit, Input } from '@angular/core';
// import { GetDataService } from '../get-data.service';
import { FetchDataService } from '../fetch-data.service';
import { Observable } from 'rxjs';

const   themes = {
  default: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  light: ['#FFF089', '#FFAD75', '#B5F4BC', '#A5FFE0'],
  dark: ['#67848C', '#5A6C70', '#8C9B9E', '#376068'],
  creme: ['#B7CCC6', '#F2DEC1', '#FFA07A', '#FF7F50']
};

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

  arr = [];
  colorScheme = {
    domain: this.arr
  };

  // observables
  results: any;
  resultsComplex: any;

  // inputs
  @Input() chartOption;
  @Input() themeOption;

  constructor(private userData: FetchDataService) {}

  async display() {
    this.results = await this.userData.getData();
  }

  async displayComplexData() {
    this.resultsComplex = await this.userData.getComplexData();

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

  selectTheme() {
    this.colorScheme = {
      domain: themes[this.themeOption]
    };

  }

  ngOnChanges() {
    this.selectFunction();
    this.selectTheme();

  }

  ngOnInit() {
    this.display();
    this.displayComplexData();
  }
}
