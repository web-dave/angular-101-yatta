import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { About2Component } from './about2/about2.component';

@NgModule({
  declarations: [AboutComponent, About2Component],
  imports: [CommonModule, AboutRoutingModule],
  exports: [About2Component]
})
export class AboutModule {}
