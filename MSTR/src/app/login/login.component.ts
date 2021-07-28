import { Component, OnInit,NgZone,ViewChild,AfterContentInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {FormBuilder,FormControl,FormGroup,Validator, Form, Validators} from '@angular/forms'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';

import {ModalOptions,ModalType} from '../class/modal';
import * as maintain from '../class/maintain';

import {CommonUtilityModule} from '../shared/common-utility/common-utility.module'

import {ModalService} from '../shared/modal/modal.service';
import {AppLoginService} from '../service/app-login.service';
import {MaintainService} from '../service/maintain.service';
import {LoadingService} from '../shared/loading/loading.service';
import {ApiCommonModule} from '../service/api-common/api-common.module';

import {ModalComponent} from '../shared/modal/modal.component'
import { envData } from '../environment/environment';
import { UpperCasePipe, JsonPipe, DatePipe } from '@angular/common';
import { isBoolean } from 'util';
declare const cordova;
declare const window;
declare const document;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;
  bodyText: string;
  appVersion:string;
  platform:string;
  appLastUpdateTime:string = "19110101";
  appEnvironment:string;
  isShowMaintain:boolean=false;
  showBeginTime:string;
  showEndTime:string;
  isComposite:boolean=false;
  // rsbody:apiLoginData.resLogin;
  constructor(
    public formBuilder:FormBuilder,
    private ngZone:NgZone,
    private router:Router,
    private route:ActivatedRoute,
    private commonUtility:CommonUtilityModule,
    protected apiCommon:ApiCommonModule,
    private loginService:AppLoginService,
    private maintainService:MaintainService,
    private modalService:ModalService,
    private loadingService:LoadingService,
    private ngbModalService:NgbModal
  ) { 
    this.loginForm = this.formBuilder.group({
      account:'',
      pwd:''
    });
    this.appVersion=envData.version;
    this.appEnvironment = commonUtility.getEnvironment();
    localStorage.removeItem("miantain");
    this.getMaintainData();
    
  }

  ngOnInit() {
    document.addEventListener('deviceready', () => {
      window.CacheClear();
    })  
     this.getMaintainData();
  };
  onInput($event:any) {
    if (!$event || this.isComposite) {
        return;
    }
    const target = $event.target;
    //const regexp = new RegExp("^[a-zA-Z0-9 ]+$");
    //target.value = target.value.replace(regexp, '');
    //console.warn(target.value);
}
onBlur($event:any){
  this.onInput($event);
  this.loginForm.controls['account'].setValue($event.target.value);
}
onCompositionstart(){
  this.isComposite=true;
}
onCompositionend($event:any){
  this.isComposite=false;
  this.onInput($event);
}
  onClickSubmit(data){
    var msg:ModalOptions;
    var result:boolean=true;
    var isLoginSucess:boolean=false;

    if (data.account=='' || data.pwd =='')
    {
      msg={
        headText:'資料驗證',
        txtContent :'使用者名稱或密碼不得為空。',
        type:ModalType.Confirm
      };

      this.modalService.open(msg,'sm');
      result=false;
    }
    else{
      this.loginService.appLogin(data.account.toUpperCase(), data.pwd)
      .subscribe(
        res=>{
          this.loadingService.hide();
          switch (res.ResponseDetails.responseCode) {
            case "000":
              this.commonUtility.TokenData=res.TokenData;
              this.commonUtility.loginUser=data.account.toUpperCase();
              isLoginSucess=true;
              result=true;
              break;
            case "008":
              msg={
                headText:'登入失敗',
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
            //密碼已到期
            case "A01":
              msg={
                headText:'登入失敗',
                txtContent :res.ReasonCode.map(
                  item=>
                  `${item.reasonMsg}(錯誤碼：${item.reasonCode})`
                  )
                  .join(' '),
                type:ModalType.Confirm
              };          
              modalRtn=this.open(msg);
              modalRtn.result.then((result) => {
                if (result =='NEXT'){
                  isLoginSucess=false;
                  this.modifyPwd(data.account.toUpperCase());
                }               
              }, (reason) => {
                console.log(reason)
              }
             );
              result=false;
              break;
            //密碼即將到期
            case "A02":
              result=false;
              var modalRtn:any;
              msg={
                headText:'登入成功',
                txtContent :res.ReasonCode.map(
                  item=>
                  `${item.reasonMsg}(錯誤碼：${item.reasonCode})`
                  )
                  .join(' '),
                type:ModalType.ModifyPwd
              };          
              modalRtn=this.open(msg);
              modalRtn.result.then((result) => {
                switch(result)
                {
                  case "NEXT":
                    this.commonUtility.TokenData=res.TokenData;
                    this.commonUtility.loginUser=data.account.toUpperCase();

                    result=true;
                    isLoginSucess=true;
                    result = this.versionCheck();
                    if (result)
                    {
                      this.ngZone.run(()=>this.router.navigateByUrl('/main'));
                    }
                    break;
                  default:
                    result=false;
                    isLoginSucess=false;
                    this.modifyPwd(data.account.toUpperCase());
                    break;
                }        
              }, (reason) => {
                console.log(reason)
              }
             );
              break;
            //首次登入
            case "A03":
              msg={
                headText:'首次登入',
                txtContent :res.ReasonCode.map(
                  item=>
                  `${item.reasonMsg}(錯誤碼：${item.reasonCode})`
                  )
                  .join(' '),
                type:ModalType.Confirm
              };          
              modalRtn=this.open(msg);
              modalRtn.result.then((result) => {
                if (result =='NEXT'){
                  isLoginSucess=false;
                  this.enableAcc(data.account.toUpperCase());
                }               
              }, (reason) => {
                console.log(reason)
              }
             );
              result=false;
              break;
            default:
              msg={
                headText:'登入失敗',
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
          console.log('onComplete');
          if (result)
          {
            if (isLoginSucess)
            {
              result = this.versionCheck();
            }  
          }
          else
          {
            this.loginForm = this.formBuilder.group({
              account:'',
              pwd:''
            });
          }
          if (result)
          {
            if(this.commonUtility.accType=='0')
            {
              this.commonUtility.accSource="STAFF";  
              this.ngZone.run(()=>this.router.navigateByUrl('/main'));
            }
            else
            {
              result=this.getTokenDetail();
            }
          }
        }
      );
    }
  };
  getMaintainData():void{
  var msg:ModalOptions;
  var Result:boolean=true;

  this.maintainService.getMaintainData()
  .subscribe(
    res=>{
      this.loadingService.hide();
      this.commonUtility.setLocalValue("maintain",JSON.stringify(res));
      switch(res.po_GetMaintainData.ReturnCode)
      {
        case 0:
          if (res.po_GetMaintainData.MaintainData.IsMaintaining=="Y")
          {
            msg={
              headText:'系統維護中',
              txtContent :res.po_GetMaintainData.MaintainData.MaintainPeriodNow.map(
                item=>
                `系統正在進行維護，停機時間為${item.Begin.substring(0,4)}/${item.Begin.substring(4,6)}/${item.Begin.substring(6,8)}
                 ${item.Begin.substring(8,10)}:${item.Begin.substring(10,12)}
                至 ${item.End.substring(0,4)}/${item.End.substring(4,6)}/${item.End.substring(6,8)}
                 ${item.End.substring(8,10)}:${item.End.substring(10,12)}。`
                )
                .join(' '),
              type:ModalType.Block
            };
            this.modalService.open(msg,'sm');
          }
          else
          {
            if (res.po_GetMaintainData.MaintainData.MaintainPeriods.length>0){
              res.po_GetMaintainData.MaintainData.MaintainPeriods.sort((a,b) =>  (a > b ? -1 : 1));
              var isImminent:boolean=false;
              var imminentTime:number=0;
              var begin:string;
              var beginY:string;
              var beginM:string;
              var beginD:string;
              var beginH:string;
              var beginMin:string;
  
              var end:string;
              var endY:string;
              var endM:string;
              var endD:string;
              var endH:string;
              var endMin:string;
  
              var beginDate:Date=new Date();
              var endDate:Date=new Date();

              res.po_GetMaintainData.MaintainData.MaintainPeriods.forEach(maintainPeriods => {
                begin =res.po_GetMaintainData.MaintainData.MaintainPeriods[0].Begin;
                beginY = begin.substring(0,4);
                beginM = begin.substring(4,6);
                beginD = begin.substring(6,8);
                beginH = begin.substring(8,10);
                beginMin = begin.substring(10,12);
                end =res.po_GetMaintainData.MaintainData.MaintainPeriods[0].End;
                endY = end.substring(0,4);
                endM = end.substring(4,6);
                endD = end.substring(6,8);
                endH = end.substring(8,10);
                endMin = begin.substring(10,12);

                beginDate = new Date(parseInt(beginY,10),parseInt(beginM,10)-1, parseInt(beginD,10),parseInt(beginH,10),parseInt(beginMin,10),0,0);
                endDate = new Date(parseInt(endY,10),parseInt(endM,10)-1, parseInt(endD,10),parseInt(endH,10),parseInt(endMin,10),0,0);
                if (imminentTime < beginDate.getTime()-new Date().getTime())
                {
                  imminentTime = beginDate.getTime()-new Date().getTime();
                  this.showBeginTime = `${beginY}/${beginM}/${beginD} ${beginH}:${beginMin}`;
                  this.showEndTime = `${endY}/${endM}/${endD} ${endH}:${endMin}`;
                }
              });
              console.log(imminentTime);
              if (imminentTime <= (5*60*1000))
              {
                isImminent=true;
                this.isShowMaintain=true;
              }
              else if(imminentTime <= (7*24*3600*1000)){
                this.isShowMaintain=true;
              }
              if (isImminent)
              {
                msg={
                  headText:'停機公告',
                  txtContent :`系統即將於${Math.ceil( imminentTime/(60*1000))}分後進行停機維護，停機時間為：${this.showBeginTime} 至 ${this.showEndTime}。`,
                  type:ModalType.Confirm
                };
                this.modalService.open(msg,'sm');                
              }
            }
          }
          break;
        default:
          msg={
            headText:'維護資訊',
            txtContent :res.po_GetMaintainData.ReturnMessage,
            type:ModalType.Confirm
          };
          this.modalService.open(msg,'sm');
          Result=false;
          break;
      }
    },
    err=>{
      console.log("error");
    },  
    ()=>{
      console.log('onComplete');
      if (Result)
      {
        
      }
      else
      {
      }
    }    
  );
}
  getTokenDetail():boolean{
    var msg:ModalOptions;
    var result:boolean=true;
    this.loginService.getTokenDetail()
    .subscribe(
      res=>{
        console.log(res);
        this.loadingService.hide();
        switch (res.ResponseDetails.responseCode) {
          case "000":
            if (res.TokenDetail.length>0){
              this.commonUtility.accSource=res.TokenDetail[0].ACC_SOURCE;   
              this.commonUtility.agentId=res.TokenDetail[0].AGENT_ID.toString(); 
              result=true;
            }
            else
            {
              msg={
                headText:'登入失敗',
                txtContent :'查無資料。',
                type:ModalType.Confirm
              }; 
              this.modalService.open(msg,'sm');
              result=false;
            }
            break;
          case "008":
            msg={
              headText:'取資料失敗',
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
              headText:'取資料失敗',
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
        console.log('get TokenDetail onComplete');
        if (result)
        {
          this.ngZone.run(()=>this.router.navigateByUrl('/main'));
        }
        else
        {
        }
      }
    );  
    return result;     
  };
  versionCheck():boolean{
    var msg:ModalOptions;
    var needUpdate:boolean=false;
    var Result:boolean=true;
    var updateUrl:string;

    this.appVersion=envData.version;
    this.platform = envData.platform;
    if (this.commonUtility.getLocalValue("appLastUpdateTime") !=null)
    {
      this.appLastUpdateTime=this.commonUtility.getLocalValue("appLastUpdateTime");
    }

    this.loginService.versionCheck(this.appVersion,this.appLastUpdateTime, this.platform)
    .subscribe(
      res=>{
        switch (res.ResponseDetails.responseCode) {
          case "000":
            var modalRtn:any;
            if (res.AppVersionStatus.NeedUpdate=="Y")
            {
              needUpdate=true;
            }
            else
            {
              if (this.appVersion=="" 
              || (
                  this.appVersion !="" && res.AppVersionStatus.AppVersion.replace('.','')  > this.appVersion.replace('.','') 
                )
              )
              {
                needUpdate=true;
              }
            }
            if (needUpdate){
              msg={
                headText:'更新資訊',
                txtContent :'有新版本，請更新。',
                type:ModalType.Confirm
              };          
              // modalRtn=this.modalService.open(msg)
              modalRtn=this.open(msg);
              modalRtn.result.then((result) => {
                if (result =='NEXT'){
                  console.log(res.AppVersionStatus.AppLink);
                  localStorage.removeItem("appLastUpdateTime");
                  this.appVersion = res.AppVersionStatus.AppVersion;
                  this.appLastUpdateTime =`${this.commonUtility.Date}${this.commonUtility.TimeStamp}`;                
                  this.commonUtility.openUrl(res.AppVersionStatus.AppLink,'_system');
                  console.log(updateUrl);
                }
                else
                {
                  Result=false;
                }                
             }, (reason) => {
               console.log(reason)
             }
             );
            }
            else
            {
              if (this.commonUtility.getLocalValue('appLastUpdateTime') ==null)
              {
                this.commonUtility.setLocalValue("appLastUpdateTime",this.appLastUpdateTime);
              }
            }
            break;
          case "008":
            // const titleString = event.body.ReasonCode.map( item => `${item.reasonMsg}(錯誤碼：${item.reasonCode})` ).join(' ');
            msg={
              headText:'更新資訊',
              txtContent :res.ReasonCode.map(
                item=>
                `${item.reasonMsg}(錯誤碼：${item.reasonCode})`
                ).join(' '),
              type:ModalType.Confirm
            };
            this.modalService.open(msg,'sm');
            Result=false;
            break;  
          default:
            msg={
              headText:'更新資訊',
              txtContent :'資料異常，請聯絡系統管理員。',
              type:ModalType.Confirm
            }; 
            this.modalService.open(msg,'sm');
            Result=false;
            break;
        };
      },
      err=>{

      },
      ()=>{
        if (needUpdate)
        {
          navigator['app'].exitApp();
        }
        
        console.log("versionCheck_Complete");
        console.log(updateUrl);
      }
    );
    return Result;   
  };

  forgetPassword()
  {
    var Page:string;
    var apiId:string;
    var kind:string;
    apiId="forgetPwdPage";
    kind="B";
    switch(this.commonUtility.accType)
    {
      case "1":
        apiId="newForgetPassword";
        break;
      default:
        break;
    } 
    // Page = this.apiCommon.getApiUrl(apiId);
    // switch(this.commonUtility.accType)
    // {
    //   case "1":
    //     Page+='?SystemCode='+this.commonUtility.systemId+"&Kind=B";
    //     break;
    //   default:
    //     Page+='&SystemID='+this.commonUtility.systemId ;
    //     break;
    // }   
    //this.commonUtility.forgetPassword(Page);
    //this.commonUtility.openUrl(Page, "_blank");
    this.commonUtility.ModifyPwd("",apiId,kind);
  }
  modifyPwd(account:string)
  {
    var Page:string;
    var apiId:string;
    var kind:string;
    apiId="modifyPwdPage";
    kind="B";
    switch(this.commonUtility.accType)
    {
      case "1":
        apiId="newForgetPassword";
        break;
      default:
        break;
    } 
    // Page = this.apiCommon.getApiUrl(apiId);
    // switch(this.commonUtility.accType)
    // {
    //   case "1":
    //     Page+='?SystemCode='+this.commonUtility.systemId+"&Kind=B";
    //     break;
    //   default:
    //     Page+='&SystemID='+this.commonUtility.systemId + '&Account='+account;
    //     break;
    // } 
    //this.commonUtility.modifyPwd(account,Page);
    //this.commonUtility.openUrl(Page, "_blank");
    this.commonUtility.ModifyPwd(account,apiId,kind);
  }
  enableAcc(account:string)
  {
    //var Page:string;
    var apiId:string;
    var kind:string;
    apiId="modifyPwdPage";
    kind="A";
    switch(this.commonUtility.accType)
    {
      case "1":
        apiId="newForgetPassword";
        break;
      default:
        break;
    } 
    // Page = this.apiCommon.getApiUrl(apiId);
    // switch(this.commonUtility.accType)
    // {
    //   case "1":
    //     Page+='?SystemCode='+this.commonUtility.systemId+"&Kind=A";
    //     break;
    //   default:
    //     Page+='&SystemID='+this.commonUtility.systemId + '&Account='+account;
    //     break;
    // } 
    // console.warn(Page);
    //this.commonUtility.modifyPwd(account,Page);   
    //this.commonUtility.openUrl(Page, "_blank"); 
    this.commonUtility.ModifyPwd(account,apiId,kind);
  }
  open(modalOptions:ModalOptions):any{
    var rtn:string;
    const modalRef = this.ngbModalService.open(ModalComponent,
      {
        scrollable: true,
        centered:true,
        size:'sm'
        // keyboard: false,
        // backdrop: 'static'
      });
 
    let data = modalOptions;
 
    modalRef.componentInstance.fromParent = data;
    // console.log(modalRef.componentInstance.fromParent);

    return modalRef;
  }
}