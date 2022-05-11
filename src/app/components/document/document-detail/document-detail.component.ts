import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { DocumentService } from '../../../services/document/document.service';
import { DocumentDetail } from './document-detail';

@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.scss']
})
export class DocumentDetailComponent implements OnInit {
  @Input()
  get documentId(): string { return this._documentId; }
  set documentId(value: string){
      this._documentId = value;
      this.documentDetail = this.documentService.getDocumentDetail(value);
  }
  private _documentId: string = '';
  documentDetail!: DocumentDetail;
  linkedFiles!:any;
  pdfXMLOutputs!:any;
  constructor(private documentService: DocumentService) { }

  ngOnInit() {
  }

  getFiles() {
    this.linkedFiles = this.documentService.GetLinkedFiles(this.documentId);
    this.pdfXMLOutputs = this.documentService.GetpdfXMLOutputs(this.documentId);
  }
}
