import { Component, OnInit } from '@angular/core';
import {FetchDataService} from 'src/app/fetch-data.service';


@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.css']
})
export class SelectUserComponent implements OnInit {
  firstNames = [];
  constructor(private fetch: FetchDataService) { }

  fetchUserName() {
    const data$ = this.fetch.fetchUserData().subscribe((data) => {
            data.forEach((element) =>{
              this.firstNames.push(element.first_name);
            });
      // console.log(this.fetchedData);
    });


  }

  ngOnInit() {
  this.fetchUserName();

  }

}
