import { Injectable } from '@angular/core';
import { of,Observable, shareReplay, BehaviorSubject, map } from 'rxjs';
import { Company } from '../../components/company/company-list/company';
import { CompanyDetail } from '../../components/company/company-detail/company-detail';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

constructor() { }

private companyCache$!: Observable<Array<Company>>;

getCompanies() {
  if (!this.companyCache$) {
    this.companyCache$ = this.requestCompanies();
  }
  return this.companyCache$;
}

getCompany(id: string) {
  if (!this.companyCache$){
    this.companyCache$ = this.requestCompanies();
  }
  return this.companyCache$.pipe(map(x => x.find(z => z.CompanyID == id)))
}

private requestCompanies(): Observable<any[]> {
  return of(this.companies);
}

getCompanyDetail(id: string){
  return <CompanyDetail>this.companyData.find(x => x.CompanyID == id)
}

companyData = [
  {CompanyProfileId: "123", CompanyID: "123", StartDate: new Date('2021-01-01'), StopDate: null, CompanyName: "TestCompany", AllowBlindSignups: false, LoginRestrictedCompletely: false, LoginRestrictedToAdmins: false, IsDemoCompany: true, LoginRestrictedToSso: false, LoginRestrictedToSsoAndAdmin: false},
  {CompanyProfileId: "234", CompanyID: "234", StartDate: new Date('2021-01-01'), StopDate: new Date('2099-01-01'), CompanyName: "Vandelay Industries", AllowBlindSignups: false, LoginRestrictedCompletely: false, LoginRestrictedToAdmins: false, IsDemoCompany: true, LoginRestrictedToSso: false, LoginRestrictedToSsoAndAdmin: false},
  {CompanyProfileId: "456", CompanyID: "456", StartDate: new Date('2021-01-01'), StopDate: new Date('2099-01-01'), CompanyName: "Bluth Company", AllowBlindSignups: false, LoginRestrictedCompletely: false, LoginRestrictedToAdmins: false, IsDemoCompany: true, LoginRestrictedToSso: false, LoginRestrictedToSsoAndAdmin: false},
  {CompanyProfileId: "789", CompanyID: "789", StartDate: new Date('2021-01-01'), StopDate: new Date('2099-01-01'), CompanyName: "Dunder Mifflin", AllowBlindSignups: false, LoginRestrictedCompletely: false, LoginRestrictedToAdmins: false, IsDemoCompany: true, LoginRestrictedToSso: false, LoginRestrictedToSsoAndAdmin: false}
]

companies =
[
  {CompanyID: "123", CompanyName: "TestCompany", URLSuffix: "test", IsActive: true, ReportingName: "TestCompany"},
  {CompanyID: "234", CompanyName: "Vandelay Industries", URLSuffix: "vand", IsActive: true, ReportingName: "VandelayIndustries"},
  {CompanyID: "456", CompanyName: "Bluth Company", URLSuffix: "bluth", IsActive: true, ReportingName: "BluthCompany"},
  {CompanyID: "789", CompanyName: "Dunder Mifflin", URLSuffix: "dunder", IsActive: true, ReportingName: "DunderMifflin"}
]


}
