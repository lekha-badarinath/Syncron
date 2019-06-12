import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-display-options',
  templateUrl: './display-options.component.html',
  styleUrls: ['./display-options.component.css']
})
export class DisplayOptionsComponent implements OnInit {
  @Output() sendOption = new EventEmitter();
  @Output() sendThemeOption = new EventEmitter();
  constructor() {}

  updateOption(chartType: string) {
    this.sendOption.emit(chartType);
  }

  updateTheme(theme: string) {
    this.sendThemeOption.emit(theme);
  }

  ngOnInit() {
    this.updateTheme('default');
    this.updateOption('vertical');
  }
}
