import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentDetailComponent } from './document-detail.component';
import { NavBasicModule } from '../../../ui/nav-basic/nav-basic.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NavBasicModule,
    FormsModule
  ],
  declarations: [DocumentDetailComponent],
  exports: [DocumentDetailComponent]
})
export class DocumentDetailModule { }
