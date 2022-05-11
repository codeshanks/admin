import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditTextComponent } from './edit-text.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EditTextComponent],
  exports: [EditTextComponent]
})
export class EditTextModule { }
