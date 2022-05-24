import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentService } from '../../services/document/document.service';

@Component({
  selector: 'app-efrom-manager',
  templateUrl: './eform-manager.component.html',
  styleUrls: ['./eform-manager.component.scss']
})
export class EformManagerComponent implements OnInit {

  constructor(
    private documentService: DocumentService,
    private route: ActivatedRoute,
  ) { }

  formId: any;
  forms:any = [];
  public term: string = "";
  docToggle = false;
  @Input() companyId: string ='';
  ngOnInit() {
    //this.companyId = this.route.snapshot.paramMap.get('id')?? '';
    this.forms = this.documentService.GetDocumentByCompanyId(this.companyId);
    if (this.forms){
      this.formId = (this.forms[0].eformId);
    }
  }

  toggleSidebar() {
    this.docToggle = !this.docToggle;
  }

  selectDoc(id: string){
    this.formId = id;
  }
}
