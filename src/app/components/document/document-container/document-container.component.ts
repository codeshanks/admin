import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DocumentDetailComponent } from '../document-detail/document-detail.component';

@Component({
  selector: 'app-document-container',
  templateUrl: './document-container.component.html',
  styleUrls: ['./document-container.component.scss']
})
export class DocumentContainerComponent implements OnInit {
  constructor() { }

  @ViewChild(DocumentDetailComponent)
  private documentDetail!: DocumentDetailComponent;
  documentId!: number;
  @Input() companyId: string ='';
  ngOnInit() {

  }

  onSelected(id: number){
    this.documentId = id;
  }

}
