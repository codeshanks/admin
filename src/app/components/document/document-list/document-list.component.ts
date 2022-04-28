import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentService } from 'src/app/services/document/document.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit {
  @Output() documentId = new EventEmitter<number>();

  constructor(
    private documentService: DocumentService,
    private route: ActivatedRoute,
  ) { }

  @Input() companyId: number = 0;
  documents:any = [];
  ngOnInit() {
    //this.companyId = Number(this.route.snapshot.paramMap.get('name'))?? 0;
    this.documents = this.documentService.getDocumentByCompanyId(this.companyId);
  }

  selectDoc(id: number){
    this.documentId.emit(id);
  }

}
