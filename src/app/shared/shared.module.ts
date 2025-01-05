import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsMobileDirective } from './directive/is-mobile.directive';

@NgModule({
  declarations: [IsMobileDirective],
  imports: [CommonModule],
  exports: [CommonModule, IsMobileDirective]
})
export class SharedModule {}
