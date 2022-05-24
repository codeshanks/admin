import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule, NgbNavModule
  ],
  exports: [NgbNavModule],
})
export class NavBasicModule { }
