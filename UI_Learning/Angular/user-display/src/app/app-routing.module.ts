import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FetchDataService} from './fetch-data.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
  providers: [FetchDataService]
})
export class AppRoutingModule { }
