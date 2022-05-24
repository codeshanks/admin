import { Component, Input, OnInit } from '@angular/core';
import { DocumentService } from '../../../../services/document/document.service';

@Component({
  selector: 'app-eform-variables',
  templateUrl: './eform-variables.component.html',
  styleUrls: ['./eform-variables.component.scss']
})
export class EformVariablesComponent implements OnInit {

  constructor(
    private documentService: DocumentService
  ) { }
  @Input()
  get FormId(): string { return this._formId; }
  set FormId(value: string){
    this._formId = value;
      this.pdfXMLOutputs = this.documentService.GetpdfXMLOutputs(value);
  }
  private _formId: string = '';
  pdfXMLOutputs!:any;
  ngOnInit() {
  }

}
