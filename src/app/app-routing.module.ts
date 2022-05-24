import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { CompanyListComponent } from './components/company/company-list/company-list.component';
import { EformManagerComponent } from './components/eform-manager/eform-manager.component';

const routes: Routes = [
  { path: '', component: CompanyListComponent },
  { path: 'company/:id', loadChildren: () => import('./components/company/company-detail/company-detail.module').then(m => m.CompanyDetailModule) },
  { path: 'eforms', component: EformManagerComponent },
  //{ path: 'company/:name', component: CompanyDetailComponent }
  //loadChildren: () => import('./basic-ui/basic-ui.module').then(m => m.BasicUiModule)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
