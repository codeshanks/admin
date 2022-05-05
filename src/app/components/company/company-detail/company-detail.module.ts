import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyDetailComponent } from './company-detail.component'
import { NavBasicModule } from  '../../../ui/nav-basic/nav-basic.module';
import { DocumentContainerModule } from '../../document/document-container/document-container.module';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CompanyDetailComponent}
]

@NgModule({
  imports: [
    CommonModule,
    NavBasicModule,
    DocumentContainerModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [CompanyDetailComponent],
  exports: [CompanyDetailComponent]
})
export class CompanyDetailModule { }
