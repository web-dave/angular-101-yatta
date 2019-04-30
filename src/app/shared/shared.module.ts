import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesPipe } from './pages.pipe';

@NgModule({
  declarations: [PagesPipe],
  exports: [PagesPipe],
  imports: [CommonModule]
})
export class SharedModule {}
