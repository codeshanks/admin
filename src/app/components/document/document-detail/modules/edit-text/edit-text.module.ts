import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditTextComponent } from './edit-text.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [EditTextComponent],
  exports: [EditTextComponent]
})
export class EditTextModule { }
