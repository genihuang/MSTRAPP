import { Component, OnInit,NgZone,ViewChild,AfterContentInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {FormBuilder,FormControl,FormGroup,Validator, Form, Validators} from '@angular/forms'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';

import {ModalOptions,ModalType} from '../class/modal';
import * as maintain from '../class/maintain';

import {CommonUtilityModule} from '../shared/common-utility/common-utility.module'

import {ModalService} from '../shared/modal/modal.service';
import {AppLoginService} from '../service/app-login.service';
import {MaintainService} from '../service/maintain.service';
import {TwofactorauthService} from '../service/twofactorauth.service';
import {LoadingService} from '../shared/loading/loading.service';
import {ApiCommonModule} from '../service/api-common/api-common.module';

import {ModalComponent} from '../shared/modal/modal.component'
import { envData } from '../environment/environment';
import { UpperCasePipe, JsonPipe, DatePipe } from '@angular/common';
import { isBoolean } from 'util';
import { env } from 'process';
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
  isNeedTwoFactor:boolean=false;
  twoFactorMethod:string;
  showBeginTime:string;
  showEndTime:string;
  isComposite:boolean=false;
  token:string;
  // rsbody:apiLoginData.resLogin;
  constructor(
    public formBuilder:FormBuilder,
    private ngZone:NgZone,
    private router:Router,
    private route:ActivatedRoute,
    private commonUtility:CommonUtilityModule,
    protected apiCommon:ApiCommonModule,
    private loginService:AppLoginService,
    private twofactorauthService:TwofactorauthService,
    private maintainService:MaintainService,
    private modalService:ModalService,
    private loadingService:LoadingService,
    private ngbModalService:NgbModal,
  ) { 
    this.loginForm = this.formBuilder.group({
      account:'',
      pwd:''
    });
    
    route.url.subscribe(() => {      
      this.token=route.snapshot.firstChild.url.toString();
     });
    // console.warn(this.route.firstChild);
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.token = params["token"];
    //     console.warn(this.token);
    //   }
    // );
    this.appVersion=envData.version;
    this.appEnvironment = commonUtility.getEnvironment();
    localStorage.removeItem("maintain");
    this.getSystemInfo();
    if(envData.needMaintain=="Y")
    {
      this.getMaintainData();
    }
    
  }

  ngOnInit() {
    document.addEventListener('deviceready', () => {
      window.CacheClear();
    })  
    this.getSystemInfo();
    if(envData.needMaintain=="Y")
    {
      this.getMaintainData();
    }
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
    //var isNeedTwoFactor:string="Y";
    // switch (envData.systemId)
    // {
    //   case "160":
    //     this.isNeedTwoFactor=true;
    //     break;
    //   default:
    //     this.isNeedTwoFactor=false;
    //     break;
    // }
    if (data.account=='' || data.pwd =='')
    {
      msg={
        headText:'????????????',
        txtContent :'???????????????????????????????????????',
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
                headText:'????????????',
                txtContent :res.ReasonCode.map(
                  item=>
                  `${item.reasonMsg}(????????????${item.reasonCode})`
                  )
                  .join(' '),
                type:ModalType.Confirm
              };          
              this.modalService.open(msg,'sm');
              result=false;
              break;
            //???????????????
            case "A01":
              msg={
                headText:'????????????',
                txtContent :res.ReasonCode.map(
                  item=>
                  `${item.reasonMsg}(????????????${item.reasonCode})`
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
            //??????????????????
            case "A02":
              result=false;
              var modalRtn:any;
              msg={
                headText:'????????????',
                txtContent :res.ReasonCode.map(
                  item=>
                  `${item.reasonMsg}(????????????${item.reasonCode})`
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
                      if(this.commonUtility.accType=='0')
                      {
                        this.commonUtility.accSource="STAFF";  
                        this.ngZone.run(()=>this.router.navigateByUrl('~/main'));
                      }
                      else
                      {
                        //result=this.getTokenDetail();
                        if (this.isNeedTwoFactor)
                        {
                          console.warn("need twofactor");
                          this.ngZone.run(()=>this.router.navigateByUrl('twofactorauth'));
                        }else
                        {
                          result=this.getTokenDetail();
                        }
                      }
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
            //????????????
            case "A03":
              msg={
                headText:'????????????',
                txtContent :res.ReasonCode.map(
                  item=>
                  `${item.reasonMsg}(????????????${item.reasonCode})`
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
            case "A05":
              msg={
                headText:'????????????',
                txtContent :res.ReasonCode.map(
                  item=>
                  `${item.reasonMsg}(????????????${item.reasonCode})`
                  )
                  .join(' '),
                type:ModalType.Confirm
              };          
              modalRtn=this.open(msg);
              modalRtn.result.then((result) => {
                if (result =='NEXT'){
                  isLoginSucess=false;
                  this.showSetupCodeUrl("A05",res.TokenData.Token);
                }               
              }, (reason) => {
                console.log(reason)
              }
             );
              result=false;
              break;
            default:
              msg={
                headText:'????????????',
                txtContent :'??????????????????????????????????????????',
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
              this.ngZone.run(()=>this.router.navigateByUrl('~/main'));
            }
            else
            {
              //this.ngZone.run(()=>this.router.navigateByUrl('twofactorauth'));
              //result=this.getTokenDetail();
              if (this.isNeedTwoFactor)
              {
                console.warn("need twofactor");
                this.ngZone.run(()=>this.router.navigateByUrl('twofactorauth'));
              }else
              {
                result=this.getTokenDetail();
              }
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
              headText:'???????????????',
              txtContent :res.po_GetMaintainData.MaintainData.MaintainPeriodNow.map(
                item=>
                `??????????????????????????????????????????${item.Begin.substring(0,4)}/${item.Begin.substring(4,6)}/${item.Begin.substring(6,8)}
                 ${item.Begin.substring(8,10)}:${item.Begin.substring(10,12)}
                ??? ${item.End.substring(0,4)}/${item.End.substring(4,6)}/${item.End.substring(6,8)}
                 ${item.End.substring(8,10)}:${item.End.substring(10,12)}???`
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
                  headText:'????????????',
                  txtContent :`???????????????${Math.ceil( imminentTime/(60*1000))}?????????????????????????????????????????????${this.showBeginTime} ??? ${this.showEndTime}???`,
                  type:ModalType.Confirm
                };
                this.modalService.open(msg,'sm');                
              }
            }
          }
          break;
        default:
          msg={
            headText:'????????????',
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
        console.warn("token:"+this.token);
        if (this.token=='')
        {
          console.warn("no Token");
        }else{
          // console.warn("get Token Data");
          // msg={
          //   headText:'test',
          //   txtContent :'test',
          //   type:ModalType.Confirm
          // }; 
          // this.modalService.open(msg,'sm');
        }
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
                headText:'????????????',
                txtContent :'???????????????',
                type:ModalType.Confirm
              }; 
              this.modalService.open(msg,'sm');
              result=false;
            }
            break;
          case "008":
            msg={
              headText:'???????????????',
              txtContent :res.ReasonCode.map(
                item=>
                `${item.reasonMsg}(????????????${item.reasonCode})`
                )
                .join(' '),
              type:ModalType.Confirm
            };          
            this.modalService.open(msg,'sm');
            result=false;
            break;
          default:
            msg={
              headText:'???????????????',
              txtContent :'??????????????????????????????????????????',
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
        this.loadingService.hide();
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
                headText:'????????????',
                txtContent :'???????????????????????????',
                type:ModalType.Confirm
              }; 
              var modaltype = ModalType.Doc;
              // modalRtn=this.modalService.open(msg)
              modalRtn=this.open(msg);
              modalRtn.result.then((result) => {
                if (result =='NEXT'){
                  console.log(res.AppVersionStatus.AppLink);
                  localStorage.removeItem("appLastUpdateTime");
                  this.appVersion = res.AppVersionStatus.AppVersion;
                  this.appLastUpdateTime =`${this.commonUtility.Date}${this.commonUtility.TimeStamp}`;                
                  this.commonUtility.openUrl(res.AppVersionStatus.AppLink,'_system',modaltype);
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
            // const titleString = event.body.ReasonCode.map( item => `${item.reasonMsg}(????????????${item.reasonCode})` ).join(' ');
            msg={
              headText:'????????????',
              txtContent :res.ReasonCode.map(
                item=>
                `${item.reasonMsg}(????????????${item.reasonCode})`
                ).join(' '),
              type:ModalType.Confirm
            };
            this.modalService.open(msg,'sm');
            Result=false;
            break;  
          default:
            msg={
              headText:'????????????',
              txtContent :'??????????????????????????????????????????',
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
          console.log(updateUrl);
          navigator['app'].exitApp();
        }
        
        console.log("versionCheck_Complete");
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
    Page = this.apiCommon.getApiUrl(apiId);
    console.warn(Page);
    this.commonUtility.ModifyPwd("",Page,kind);
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
    Page = this.apiCommon.getApiUrl(apiId);
    this.commonUtility.ModifyPwd(account,Page,kind);
  }
  enableAcc(account:string)
  {
    var Page:string;
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
    Page = this.apiCommon.getApiUrl(apiId);
    // switch(this.commonUtility.accType)
    // {
    //   case "1":
    //     Page+='?SystemCode='+this.commonUtility.systemId+"&Kind=A";
    //     break;
    //   default:
    //     Page+='&SystemID='+this.commonUtility.systemId + '&Account='+account;
    //     break;
    // } 
    //console.warn(Page);
    //this.commonUtility.modifyPwd(account,Page);   
    //this.commonUtility.openUrl(Page, "_blank"); 
    this.commonUtility.ModifyPwd(account,Page,kind);
  }
  resetTwoFactorDevice()
  {
    var Page:string;
    var apiId:string;
    var kind:string;
    var target:string='_blank';
    var modaltype = ModalType.Doc;
    apiId="resetTwoFactorDeviceUrl";
    Page = this.apiCommon.getApiUrl(apiId);
    Page+="?SystemCode="+envData.systemId;
    console.warn(Page);
    this.commonUtility.openUrl(Page,target,modaltype);
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
  showSetupCodeUrl(type:string,token:string):void{
    var Page:string;
    var apiId:string;
    var kind:string;
    var target:string='_blank';
    var modaltype = ModalType.Doc;
    apiId="getSetupCodeUrl";
    Page = this.apiCommon.getApiUrl(apiId);
    Page+="?token="+token;
    console.warn(Page);
    this.commonUtility.openUrl(Page,target,modaltype);
  }
  getSystemInfo(){
    var msg:ModalOptions;
    var result:boolean=true;
    this.loginService.getSystemInfo()
    .subscribe(
      res=>{
        console.log(res);
        this.loadingService.hide();
        switch (res.ResponseDetails.responseCode) {
          case "000":
            if (res.SystemInfo.TWO_FACTOR_AUTHENTICATION =="Y"){
              this.isNeedTwoFactor=true;
              this.twoFactorMethod=res.SystemInfo.TWO_FACTOR_AUTHEN_METHOD;
              result=true;
            }
            else
            {
              this.isNeedTwoFactor=false;
              result=true;
            }
            break;
          case "008":
            msg={
              headText:'???????????????',
              txtContent :res.ReasonCode.map(
                item=>
                `${item.reasonMsg}(????????????${item.reasonCode})`
                )
                .join(' '),
              type:ModalType.Confirm
            };          
            this.modalService.open(msg,'sm');
            result=false;
            break;
          default:
            msg={
              headText:'???????????????',
              txtContent :'??????????????????????????????????????????',
              type:ModalType.Confirm
            }; 
            this.modalService.open(msg,'sm');
            result=false;
            break;
        };
      },
      err=>{
        console.log("error in SystemInfo");
      }
    );  
    return result;     
  }
  testcors(){
    var msg:ModalOptions;
    var result:boolean=true;
    var isLoginSucess:boolean=false;
    //var isNeedTwoFactor:string="Y";
    switch (envData.systemId)
    {
      case "160":
        this.isNeedTwoFactor=true;
        break;
      default:
        this.isNeedTwoFactor=false;
        break;
    }
    console.warn('Cors');
    this.loginService.appLogin('TAAOB', 'Abcd1234')
    .subscribe(
      res=>{
        this.loadingService.hide();
        switch (res.ResponseDetails.responseCode) {
          case "000":
            this.commonUtility.TokenData=res.TokenData;
            this.commonUtility.loginUser='TAAOB'
            isLoginSucess=true;
            result=true;
            break;
          case "008":
            msg={
              headText:'????????????',
              txtContent :res.ReasonCode.map(
                item=>
                `${item.reasonMsg}(????????????${item.reasonCode})`
                )
                .join(' '),
              type:ModalType.Confirm
            };          
            this.modalService.open(msg,'sm');
            result=false;
            break;
          //???????????????
          case "A01":
            msg={
              headText:'????????????',
              txtContent :res.ReasonCode.map(
                item=>
                `${item.reasonMsg}(????????????${item.reasonCode})`
                )
                .join(' '),
              type:ModalType.Confirm
            };          
            modalRtn=this.open(msg);
            modalRtn.result.then((result) => {
              if (result =='NEXT'){
                isLoginSucess=false;
                this.modifyPwd('TAAOB');
              }               
            }, (reason) => {
              console.log(reason)
            }
           );
            result=false;
            break;
          //??????????????????
          case "A02":
            result=false;
            var modalRtn:any;
            msg={
              headText:'????????????',
              txtContent :res.ReasonCode.map(
                item=>
                `${item.reasonMsg}(????????????${item.reasonCode})`
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
                  this.commonUtility.loginUser='TAAOB';

                  result=true;
                  isLoginSucess=true;
                  result = this.versionCheck();
                  if (result)
                  {
                    if(this.commonUtility.accType=='0')
                    {
                      this.commonUtility.accSource="STAFF";  
                      this.ngZone.run(()=>this.router.navigateByUrl('~/main'));
                    }
                    else
                    {
                      //result=this.getTokenDetail();
                      if (this.isNeedTwoFactor)
                      {
                        console.warn("need twofactor");
                        this.ngZone.run(()=>this.router.navigateByUrl('twofactorauth'));
                      }else
                      {
                        result=this.getTokenDetail();
                      }
                    }
                  }
                  break;
                default:
                  result=false;
                  isLoginSucess=false;
                  this.modifyPwd('TAAOB');
                  break;
              }        
            }, (reason) => {
              console.log(reason)
            }
           );
            break;
          //????????????
          case "A03":
            msg={
              headText:'????????????',
              txtContent :res.ReasonCode.map(
                item=>
                `${item.reasonMsg}(????????????${item.reasonCode})`
                )
                .join(' '),
              type:ModalType.Confirm
            };          
            modalRtn=this.open(msg);
            modalRtn.result.then((result) => {
              if (result =='NEXT'){
                isLoginSucess=false;
                this.enableAcc('TAAOB');
              }               
            }, (reason) => {
              console.log(reason)
            }
           );
            result=false;
            break;
          case "A05":
            msg={
              headText:'????????????',
              txtContent :res.ReasonCode.map(
                item=>
                `${item.reasonMsg}(????????????${item.reasonCode})`
                )
                .join(' '),
              type:ModalType.Confirm
            };          
            modalRtn=this.open(msg);
            modalRtn.result.then((result) => {
              if (result =='NEXT'){
                isLoginSucess=false;
                this.showSetupCodeUrl("A05",res.TokenData.Token);
              }               
            }, (reason) => {
              console.log(reason)
            }
           );
            result=false;
            break;
          default:
            msg={
              headText:'????????????',
              txtContent :'??????????????????????????????????????????',
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
            this.ngZone.run(()=>this.router.navigateByUrl('~/main'));
          }
          else
          {
            //this.ngZone.run(()=>this.router.navigateByUrl('twofactorauth'));
            //result=this.getTokenDetail();
            if (this.isNeedTwoFactor)
            {
              console.warn("need twofactor");
              this.ngZone.run(()=>this.router.navigateByUrl('twofactorauth'));
            }else
            {
              result=this.getTokenDetail();
            }
          }
        }
      }
    );
  };
}