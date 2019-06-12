import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'charts';
  chartOption = '';
  themeOption = '';

  acceptOption(event) {
    this.chartOption = event;
    console.log('event transmitted- ' + event);
  }

  acceptThemeOption(event){
    this.themeOption = event;
    console.log('event transmitted- ' + event);
  }
}
