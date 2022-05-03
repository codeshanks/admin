import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentDetailComponent } from './document-detail.component';
import { NavBasicModule } from '../../../ui/nav-basic/nav-basic.module';

@NgModule({
  imports: [
    CommonModule,
    NavBasicModule,
  ],
  declarations: [DocumentDetailComponent],
  exports: [DocumentDetailComponent]
})
export class DocumentDetailModule { }
