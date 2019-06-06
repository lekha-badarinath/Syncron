import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectUserComponent } from './select-user/select-user.component';
import { DisplayUserComponent } from './display-user/display-user.component';

@NgModule({
  declarations: [SelectUserComponent, DisplayUserComponent],
  imports: [CommonModule],

  exports: [SelectUserComponent, DisplayUserComponent]
})
export class SelectAndDisplayModule {}
