import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponentComponent } from './first-component/first-component.component';

@NgModule({
  declarations: [FirstComponentComponent],
  imports: [CommonModule],
  exports: [FirstComponentComponent],
  providers: []
})
export class DummyModuleModule {}
