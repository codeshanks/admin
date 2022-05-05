import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyListComponent } from './company-list.component'
import { RouterModule } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  declarations: [CompanyListComponent],
  exports: [CompanyListComponent]
})
export class CompanyListModule { }
