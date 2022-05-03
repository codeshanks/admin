import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyDetailComponent } from './company-detail.component'
import { NavBasicModule } from  '../../../ui/nav-basic/nav-basic.module';
import { DocumentContainerModule } from '../../document/document-container/document-container.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NavBasicModule,
    DocumentContainerModule,
    FormsModule
  ],
  declarations: [CompanyDetailComponent],
  exports: [CompanyDetailComponent]
})
export class CompanyDetailModule { }
