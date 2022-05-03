import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentListComponent } from './document-list.component';
import { AppRoutingModule } from '../../../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [DocumentListComponent],
  exports: [DocumentListComponent]
})
export class DocumentListModule { }
