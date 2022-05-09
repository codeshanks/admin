import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CompanyService } from '../../../services/company/company.service';
import { Company } from '../company-list/company';
import { CompanyDetail } from './company-detail'

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService,
  ) { }

  companyId!: string;
  company!: Company;
  companyDetail!: CompanyDetail;

  ngOnInit() {
    this.companyId = this.route.snapshot.paramMap.get('id')?? '';
    this.getCompanyDetails(this.companyId);
    this.getCompany(this.companyId);
    console.log(this.companyDetail);
  }

  getCompanyDetails(id: string){
    this.companyDetail = <CompanyDetail>(this.companyService.getCompanyDetail(id));
  }

  getCompany(id: string){
    this.companyService.getCompany(id).subscribe(
      (x:any) => this.company = x
    );
  }

}
