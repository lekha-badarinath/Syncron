import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  updateTaskList = [];
  completedTask = [];
  hideCompletedTask = true;

  constructor() {}

  updateTask(event) {
    const task = event.target.value;
    this.updateTaskList.push(task);
    event.target.value = '';
  }

  updateCompletedTasks(task) {
    this.completedTask.push(task);
    for (let i = 0; i < this.updateTaskList.length; i++) {
      if (this.updateTaskList[i] === task) {
        this.updateTaskList.splice(i, 1);
      }
    }
  }

  hideCompletedTasks() {
    this.hideCompletedTask = false;
    // console.log(this.accepted);
  }

  // sample(val) {
  //   console.log(val);
  // }
  ngOnInit() {}
}
