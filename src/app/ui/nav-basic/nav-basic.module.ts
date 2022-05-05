import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBasicComponent } from './nav-basic.component';

@NgModule({
  imports: [
    CommonModule, NgbNavModule
  ],
  declarations: [NavBasicComponent],
  exports: [NgbNavModule,NavBasicComponent],
})
export class NavBasicModule { }
