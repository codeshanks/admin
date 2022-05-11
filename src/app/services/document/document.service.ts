import { Injectable } from '@angular/core';
import { EditText } from 'src/app/components/document/document-detail/modules/edit-text/edit-text';
import { DocumentDetail } from '../../components/document/document-detail/document-detail';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

constructor() { }



GetDocumentByCompanyId(id: string){
  if (id == '')
    return this.documentData;
  return this.documentData.filter(x => x.companyId == id);
}

GetAllDocuments(){
  return this.documentData;
}

GetDocumentDetail(id: string){
  var document = <DocumentDetail>this.documentDetail.find(x => x.FormId == id);
  return document??  <DocumentDetail>{};
}

GetLinkedFiles(id: string){
  return this.linkedFiles.filter(x => x.FormId == id);
}

GetpdfXMLOutputs(id: string){

}

GetEditableFields(id: string){
  return <EditText[]>this.editableFields.filter(x => x.FormId == id);
}

detail: DocumentDetail = <DocumentDetail>{};

documentDetail =
[
  {FormName: "Arizona A-4", ClientFormName: "Arizona A-4", FormId: "123", GroupName: "Arizona", DisplayOrder: 1, FormYear: 2022, Revision: "Rev 2022", FormState: "AZ", GrossStateFilter: "", FormType: "State W4", Classification: "State", Expiration: "", ExpirationCondition: "", LimitOne: true, ViewOnlyOnceComplete: true, AllowFinishLater: true, StandardResetTriggers: false, ResetWithRehireResetFile: false, ResetWithHireDateChange: true, ResetWithFormCode: false, ResetFormCode: "", WCPresentNewVersion: false, WCRequireSubmission: false, WCPendingFormReport: false, WNCPresentNewVersion: false, WNCRequireSubmission: false, WNCPendingFormReport: false, SupersededFormId: "", TemplateType: "", CompletedConfirmText: "You have successfully completed the signed form" }
]

documentData =
[
  {
    companyId: "123",
    eformId: "123",
    eformName: "Arizona A-4"
  },
  {
    companyId: "123",
    eformId: "345",
    eformName: "Arizona A-5"
  },
  {
    companyId: "456",
    eformId: "678",
    eformName: "Arizona A-6"
  },
  {
    companyId: "234",
    eformId: "911",
    eformName: "Arizona A-7"
  },
  {
    companyId: "789",
    eformId: "113",
    eformName: "Arizona A-8"
  }
]

linkedFiles =
[
  { FormId: "123", Type: "Content", Title: "Inline PDF", FileName: "Arizona PDF" }
]

editableFields =
[
  { FormId: "123", Field: "Text/HTML - Block Above Document (optional)", Value: "this is an optional text/html area" },
  { FormId: "123", Field: "Text/HTML - Block Below Document (optional)", Value: "this is an optional area below the inline document" }
]



}
