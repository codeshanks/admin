import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentService } from '../../../services/document/document.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit {

  constructor(
    private documentService: DocumentService,
    private route: ActivatedRoute,
  ) { }

  @Output() documentId = new EventEmitter<string>();
  @Input() companyId: string = '';
  documents:any = [];
  public term: string = "";
  ngOnInit() {
    this.documents = this.documentService.GetDocumentByCompanyId(this.companyId);
    if (this.documents){
      this.documentId.emit(this.documents[0].eformId);
    }
  }

  selectDoc(id: string){
    this.documentId.emit(id);
  }

}
