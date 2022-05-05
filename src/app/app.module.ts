import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavBasicModule } from './ui/nav-basic/nav-basic.module';

import { CompanyListModule } from "./components/company/company-list/company-list.module";
import { CompanyDetailModule } from './components/company/company-detail/company-detail.module'
import { DocumentListModule } from './components/document/document-list/document-list.module';
import { DocumentContainerModule } from './components/document/document-container/document-container.module';
import { DocumentDetailModule } from './components/document/document-detail/document-detail.module';
import { ContainerModule } from './components/container/container.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavBasicModule,
    CompanyListModule,
    DocumentListModule,
    DocumentContainerModule,
    DocumentDetailModule,
    ContainerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
