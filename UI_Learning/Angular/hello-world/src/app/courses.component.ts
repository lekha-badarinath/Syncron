import { Component } from '@angular/core'

@Component({
    selector: 'courses',        //Component name
    template: '<h2>{{ titleFunction() }}</h2>'  //
})
export class CoursesComponent{
    title="List of courses"
    category="Angular"
    titleFunction(){
        return this.category
    }
}