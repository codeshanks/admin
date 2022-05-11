import { Component, Input, OnInit } from '@angular/core';
import { DocumentService } from '../../../../../services/document/document.service';
import { EditText } from './edit-text';

@Component({
  selector: 'app-edit-text',
  templateUrl: './edit-text.component.html',
  styleUrls: ['./edit-text.component.scss']
})
export class EditTextComponent implements OnInit {

  constructor(private documentService: DocumentService) { }

  @Input()
  get documentId(): string { return this._documentId; }
  set documentId(value: string){
      this._documentId = value;
      this.fields = this.documentService.GetEditableFields(value);
      this.currentField = this.fields[0].Field;
      this.currentValue = this.fields[0].Value;
  }
  private _documentId: string = '';
  fields: EditText[];
  currentField: string = "";
  currentValue: string = "";
  ngOnInit() {
  }

  selectField(field: string){
    this.currentField = this.fields.find(x => x.Field == field)?.Field?? "";
    this.currentValue = this.fields.find(x => x.Field == field)?.Value?? "";
  }

}
