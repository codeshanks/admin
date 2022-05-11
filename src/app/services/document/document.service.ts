import { Injectable } from '@angular/core';
import { DocumentDetail } from '../../components/document/document-detail/document-detail';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

constructor() { }



getDocumentByCompanyId(id: string){
  if (id == '')
    return this.documentData;
  return this.documentData.filter(x => x.companyId == id);
}

getAllDocuments(){
  return this.documentData;
}

getDocumentDetail(id: string){
  var document = <DocumentDetail>this.documentDetail.find(x => x.FormId == id);
  return document??  <DocumentDetail>{};
}

GetLinkedFiles(id: string){
  return this.linkedFiles.filter(x => x.FormId == id);
}

GetpdfXMLOutputs(id: string){

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



}
