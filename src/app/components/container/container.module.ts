import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container.component';
import { NavBasicModule } from '../../ui/nav-basic/nav-basic.module';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    NavBasicModule,
    RouterModule
  ],
  declarations: [ContainerComponent],
  exports: [ContainerComponent]
})
export class ContainerModule { }
