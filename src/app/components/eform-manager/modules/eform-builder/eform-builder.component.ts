import { Component, Input, OnInit } from '@angular/core';
import { DocumentService } from '../../../../services/document/document.service';

@Component({
  selector: 'app-eform-builder',
  templateUrl: './eform-builder.component.html',
  styleUrls: ['./eform-builder.component.scss']
})
export class EformBuilderComponent implements OnInit {

  constructor(
    private documentService: DocumentService
  ) { }
  @Input()
  get FormId(): string { return this._FormId; }
  set FormId(value: string){
      this._FormId = value;
      this.fields = this.documentService.GetEditableFields(value);
      this.currentField = this.fields[0].Field;
      this.currentValue = this.fields[0].Value;
  }
  private _FormId: string = '';
  fields: any[];
  currentField: string = "";
  currentValue: string = "";

  ngOnInit() {
  }

  selectField(field: string){
    this.currentField = this.fields.find(x => x.Field == field)?.Field?? "";
    this.currentValue = this.fields.find(x => x.Field == field)?.Value?? "";
  }

}
