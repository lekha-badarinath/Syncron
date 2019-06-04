import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css']
})
export class ComponentOneComponent implements OnInit {
  userID = '';
  returnedTaskList = [];
  constructor() {}
  saveUserID(event) {
    this.userID = event.target.value;
  }

  acceptTaskList(event) {
    this.returnedTaskList = event;
  }

  ngOnInit() {}
}
