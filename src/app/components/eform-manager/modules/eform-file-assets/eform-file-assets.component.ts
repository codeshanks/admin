import { Component, Input, OnInit } from '@angular/core';
import { DocumentService } from '../../../../services/document/document.service';

@Component({
  selector: 'app-eform-file-assets',
  templateUrl: './eform-file-assets.component.html',
  styleUrls: ['./eform-file-assets.component.scss']
})
export class EformFileAssetsComponent implements OnInit {

  constructor(private documentService: DocumentService) { }
  @Input()
  get FormId(): string { return this._formId; }
  set FormId(value: string){
    this._formId = value;
    this.linkedFiles = this.documentService.GetLinkedFiles(value);
  }
  private _formId: string = '';
  linkedFiles!:any;
  ngOnInit() {
  }

}
