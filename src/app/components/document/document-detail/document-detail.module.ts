import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentDetailComponent } from './document-detail.component';
import { NavBasicModule } from '../../../ui/nav-basic/nav-basic.module';
import { FormsModule } from '@angular/forms';
import { EditTextModule } from './modules/edit-text/edit-text.module';

@NgModule({
  imports: [
    CommonModule,
    NavBasicModule,
    FormsModule,
    EditTextModule
  ],
  declarations: [DocumentDetailComponent],
  exports: [DocumentDetailComponent]
})
export class DocumentDetailModule { }
