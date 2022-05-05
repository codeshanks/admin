import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../../services/company/company.service';
import { Company } from './company';


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  constructor(
    private companyService: CompanyService
  ) { }
  public term: string = "";
  companies: Company[] = [];
  ngOnInit() {
    this.companyService.getCompanies()
      .subscribe(async (x: Company[]) => this.companies = x);

  }



}
