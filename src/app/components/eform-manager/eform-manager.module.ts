import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EformManagerComponent } from './eform-manager.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { NavBasicModule } from '../../ui/nav-basic/nav-basic.module';
import { EformPropertiesModule } from './modules/eform-properties/eform-properties.module';
import { MaterialModule } from '../../ui/material/material.module';
import { EformFileAssetsModule } from './modules/eform-file-assets/eform-file-assets.module';
import { EformVariablesModule } from './modules/eform-variables/eform-variables.module';
import { EformBuilderModule } from './modules/eform-builder/eform-builder.module';

@NgModule({
  imports: [
    CommonModule,
    Ng2SearchPipeModule,
    FormsModule,
    NavBasicModule,
    MaterialModule,
    EformPropertiesModule,
    EformFileAssetsModule,
    EformVariablesModule,
    EformBuilderModule
  ],
  declarations: [EformManagerComponent],
  exports: [EformManagerComponent]
})
export class EformManagerModule { }
