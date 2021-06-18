import { Injectable,Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ModalComponent} from  './modal.component';
import { Observable , throwError, TimeoutError, of } from 'rxjs';

import {ModalType,ModalOptions} from '../../class/modal';
import { promise } from 'protractor';



@Injectable({
  providedIn: 'root'
})
export class ModalService {
  // @Input() fromParent;
  constructor(
    private ngbModalService: NgbModal
    ) { }

  open(modalOptions:ModalOptions,screenSize:string):any{
    var rtn:string;
    console.log(screenSize);
    const modalRef = this.ngbModalService.open(ModalComponent,
      {
        scrollable: true,
        centered:true,
        size:screenSize,
        keyboard: false,
        backdrop: 'static'
      });
 
    let data = modalOptions;
 
    modalRef.componentInstance.fromParent = data;
    console.log(modalRef.componentInstance.fromParent);
    // return this.http.post<login.resMstrLogin>(apiUrl, JSON.stringify(rqbody), httpOptions)
     modalRef.result.then((result) => {
       console.log(result);
      return result;
      console.log(rtn);
    }, (reason) => {
      console.log(reason)
    }
    );

  }
  handler(countData) {
    console.log(`handler : data => ${countData}`)
    }
}
