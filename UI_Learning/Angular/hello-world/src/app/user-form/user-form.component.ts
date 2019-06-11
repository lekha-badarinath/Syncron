import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user = '';
  pass = '';
  passConfirm = '';
  errorMessage = '';
  minLengthError = false;
  minPassLength = false;
  passMismatchError = false;
  constructor() {}

  userID(event) {
    this.user = event.target.value;
    this.minLengthError = this.user.length < 6;
    // if (this.user.length < 6)
    // {this.errorMessage = "Length of user ID must be greater than Six"}
  }

  setPassword(event) {
    this.pass = event.target.value;
    this.minPassLength = this.pass.length < 6;
  }

  confirmPassword(event) {
    this.passConfirm = event.target.value;
    this.passMismatchError = this.pass !== this.passConfirm;
  }
  // updatePassMismatchMessage(error: boolean){
  //   this.errorMessage = error ? "Passwords don't match" : '';
  // }

  // updateIdLength(error: boolean){
  //   this.errorMessage = error ? "Length of user ID must be greater than Six" : '';
  // }

  // updateSubmit(){
  //   if (this.errorMessage === ''){

  //   }

  // }

  ngOnInit() {}
}
