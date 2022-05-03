import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentContainerComponent } from './document-container.component';
import { AppRoutingModule } from '../../../app-routing.module';
import { DocumentListModule } from '../document-list/document-list.module';
import { DocumentDetailModule } from '../document-detail/document-detail.module';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    DocumentListModule,
    DocumentDetailModule
  ],
  declarations: [DocumentContainerComponent],
  exports: [DocumentContainerComponent]
})
export class DocumentContainerModule { }
