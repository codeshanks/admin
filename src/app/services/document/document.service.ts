import { Injectable } from '@angular/core';

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



documentData =
[
  {
    companyId: "123",
    eformId: 123,
    eformName: "Arizona A-4"
  },
  {
    companyId: "123",
    eformId: 345,
    eformName: "Arizona A-5"
  },
  {
    companyId: "456",
    eformId: 678,
    eformName: "Arizona A-6"
  },
  {
    companyId: "234",
    eformId: 911,
    eformName: "Arizona A-7"
  },
  {
    companyId: "789",
    eformId: 113,
    eformName: "Arizona A-8"
  }
]





}
