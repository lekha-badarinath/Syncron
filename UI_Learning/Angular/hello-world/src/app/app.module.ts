import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { SampleModuleModule } from './sample-module/sample-module.module';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CalculatorComponent,
    UserFormComponent,
    ToDoListComponent
  ],
  imports: [BrowserModule, AppRoutingModule, SampleModuleModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
