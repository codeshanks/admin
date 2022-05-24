import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavBasicModule } from './ui/nav-basic/nav-basic.module';

import { CompanyListModule } from "./components/company/company-list/company-list.module";
import { HeaderModule } from './components/header/header.module';
import { EformManagerModule } from './components/eform-manager/eform-manager.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavBasicModule,
    CompanyListModule,
    HeaderModule,
    EformManagerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
