import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectAndDisplayModule } from './select-and-display/select-and-display.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SelectAndDisplayModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
