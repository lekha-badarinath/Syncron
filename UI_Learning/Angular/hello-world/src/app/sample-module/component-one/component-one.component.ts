import { Component, OnInit } from '@angular/core';
import { TestService } from '../../test.service';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css']
})
export class ComponentOneComponent implements OnInit {
  password = '';
  returnedTaskList = [];

  constructor(private movieList: TestService) {}
  displayMovie() {
    this.movieList.listOfMovies().forEach(movie => {
      console.log(movie);
    });
  }

  checkPassword(event) {
    if (event.target.value === 'qaz') {
      this.password = event.target.value;
    } else {
      console.log('Access denied as the entered password was incorrect');
    }
  }

  acceptTaskList(event) {
    this.returnedTaskList = event;
  }

  ngOnInit() {
    this.displayMovie();
  }
}
