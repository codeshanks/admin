import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../../services/company/company.service';


@Component({
  selector: 'app-company',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  constructor(
    private companyService: CompanyService
  ) { }

  companies:any = [];
  ngOnInit() {
    this.companyService.getCompanies()
      .subscribe(async (x: any) => this.companies = x);
  }



}
