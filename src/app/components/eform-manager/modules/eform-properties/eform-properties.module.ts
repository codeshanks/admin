import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EformPropertiesComponent } from './eform-properties.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [EformPropertiesComponent],
  exports: [EformPropertiesComponent]
})
export class EformPropertiesModule { }
