import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EformBuilderComponent } from './eform-builder.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [EformBuilderComponent],
  exports: [EformBuilderComponent]
})
export class EformBuilderModule { }
