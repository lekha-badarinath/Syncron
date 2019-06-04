import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.css']
})
export class ComponentTwoComponent implements OnInit {
  @Input()
  componentTwoUserID;
  taskList = [];
  @Output() sendTaskList = new EventEmitter();
  constructor() {}
  saveTask(event) {
    this.taskList.push(event.target.value);
    this.sendTaskList.emit(this.taskList);
    event.target.value = '';
  }
  ngOnInit() {}
}
