import { Component, OnInit,NgZone,ViewChild,AfterContentInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {FormBuilder,FormControl,FormGroup,Validator, Form, Validators} from '@angular/forms'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';

import {ModalOptions,ModalType} from '../class/modal';
import {CommonUtilityModule} from '../shared/common-utility/common-utility.module'
import {ModalService} from '../shared/modal/modal.service';
import {TwofactorauthService} from '../service/twofactorauth.service';
import {LoadingService} from '../shared/loading/loading.service';
import {ApiCommonModule} from '../service/api-common/api-common.module';

import {ModalComponent} from '../shared/modal/modal.component'
import { envData } from '../environment/environment';

declare const cordova;
declare const window;
declare const document;

@Component({
  selector: 'app-twofactorauth',
  templateUrl: './twofactorauth.component.html',
  styleUrls: ['./twofactorauth.component.css']
})
export class TwofactorauthComponent implements OnInit {
  validateForm;
  validateKind:string;
  constructor(
    public formBuilder:FormBuilder,
    private ngZone:NgZone,
    private router:Router,
    private route:ActivatedRoute,
    private commonUtility:CommonUtilityModule,
    protected apiCommon:ApiCommonModule,
    private twofactorauthService:TwofactorauthService,
    private modalService:ModalService,
    private loadingService:LoadingService,
    private ngbModalService:NgbModal
  ) { 
    this.validateForm = this.formBuilder.group({
      validatePin:''
    });
    route.url.subscribe(() => {      
      this.validateKind=route.snapshot.firstChild.url.toString();
     });
  }

  ngOnInit() {
    document.addEventListener('deviceready', () => {
      window.CacheClear();
    })  
  }
  onClickSubmit(data){
    var msg:ModalOptions;
    var result:boolean=true;
    console.log(data.validatePin);
    if (data.validatePin=='')
    {
      msg={
        headText:'資料驗證',
        txtContent :'驗證碼不得為空。',
        type:ModalType.Confirm
      };

      this.modalService.open(msg,'sm');
      result=false;
    }
    else{
      
      this.twofactorauthService.validateTwoFactorPIn(data.validatePin,"LOGIN")
      .subscribe(
        res=>{
          this.loadingService.hide();
          console.warn(res);
          switch (res.ResponseDetails.responseCode) {
            case "000":
              result=true;
              break;
            case "008":
              msg={
                headText:'雙因子驗證失敗',
                txtContent :res.ReasonCode.map(
                  item=>
                  `${item.reasonMsg}(錯誤碼：${item.reasonCode})`
                  )
                  .join(' '),
                type:ModalType.Confirm
              };          
              this.modalService.open(msg,'sm');
              result=false;
              break;
            default:
              msg={
                headText:'雙因子驗證失敗',
                txtContent :'資料異常，請聯絡系統管理員。',
                type:ModalType.Confirm
              }; 
              this.modalService.open(msg,'sm');
              result=false;
              break;
          };
        },
        err=>{
          console.log("error");
        },
        ()=>{
          console.log('2FA onComplete');
          if (result)
          {
            this.ngZone.run(()=>this.router.navigateByUrl('main'));
          }
          else
          {
            this.validateForm = this.formBuilder.group({
              validatePin:''
            });
          }
        }
      );
    }
  }
}
