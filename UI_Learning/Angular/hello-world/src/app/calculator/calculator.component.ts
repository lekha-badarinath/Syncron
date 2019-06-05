import { Component, OnInit } from '@angular/core';
import { parse } from 'path';
// import { TestService } from './test.service';
import { LogService } from '../log.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  num1 = 15;
  num2 = 10;
  result = 0;
  constructor(private src: LogService) {}

  displayServiceMessage() {
    this.src.printToLog('Hello! This is a service');
  }

  add() {
    this.result = +this.num1 + +this.num2;
  }

  subtract() {
    this.result = +this.num1 - +this.num2;
    console.log(this.result);
  }

  multiply() {
    this.result = +this.num1 * +this.num2;
    this.result = +this.result.toFixed(2);
  }

  divide() {
    if (this.num1 !== 0) {
      this.result = +this.num1 / this.num2;
    }
  }

  updateNum1(event) {
    this.num1 = event.target.value;
    console.log(this.num1);
  }

  updateNum2(event) {
    this.num2 = event.target.value;
    console.log(this.num1);
  }

  ngOnInit() {
    this.displayServiceMessage();
  }
}
