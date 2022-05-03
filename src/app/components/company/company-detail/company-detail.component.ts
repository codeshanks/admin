import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CompanyService } from '../../../services/company/company.service';
import { Company } from './company'

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

  name!: string | null;
  companyId!: number;
  company!: Company;

  ngOnInit() {
    this.companyId = Number(this.route.snapshot.paramMap.get('id'));
    this.name = this.route.snapshot.paramMap.get('name');
    this.getCompanyDetails(this.companyId);
  }

  getCompanyDetails(id: number){
    this.company = <Company>(this.companyService.getCompanyDetail(id));
  }

}
