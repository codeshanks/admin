import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentListComponent } from './document-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  declarations: [DocumentListComponent],
  exports: [DocumentListComponent]
})
export class DocumentListModule { }
