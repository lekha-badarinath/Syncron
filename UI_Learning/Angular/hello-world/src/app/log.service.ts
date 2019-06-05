import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  printToLog(arg) {
    console.log(arg);
  }
}
