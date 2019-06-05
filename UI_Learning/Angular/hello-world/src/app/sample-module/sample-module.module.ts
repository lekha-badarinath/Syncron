import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { ComponentThreeComponent } from './component-three/component-three.component';

import { TestService } from '../test.service';

@NgModule({
  declarations: [
    ComponentOneComponent,
    ComponentTwoComponent,
    ComponentThreeComponent
  ],
  imports: [CommonModule],
  exports: [ComponentOneComponent],
  providers: [TestService]
})
export class SampleModuleModule {}
