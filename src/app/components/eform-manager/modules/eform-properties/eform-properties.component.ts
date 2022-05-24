import { Component, Input, OnInit } from '@angular/core';
import { DocumentService } from '../../../../services/document/document.service';

@Component({
  selector: 'app-eform-properties',
  templateUrl: './eform-properties.component.html',
  styleUrls: ['./eform-properties.component.scss']
})
export class EformPropertiesComponent implements OnInit {

  constructor(
    private documentService: DocumentService
  ) { }
  @Input()
  get FormId(): string { return this._formId; }
  set FormId(value: string){
    this._formId = value;
      this.formProperties = this.documentService.GetDocumentDetail(value);
  }
  private _formId: string = '';

  formProperties!: any;
  ngOnInit() {
  }

}
