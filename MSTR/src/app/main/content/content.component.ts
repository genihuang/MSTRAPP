import { Component, OnInit, Input } from '@angular/core';
import { Location, JsonPipe } from '@angular/common';
import { HttpParameterCodec } from '@angular/common/http';
import { ActivatedRoute, Params,Router } from '@angular/router';
//import {safariviewcontroller} from 'cordova-plugin-safariviewcontroller';


import { MenuNode, ObjectNode } from '../../class/menu';
import { MstrSessionDetail } from '../../class/mstr-session';
import { IApiConfig } from '../../class/environment';
import { MenuService } from '../../service/menu.service';
import { MstrLoginService } from '../../service/mstr-login.service';
import { ModalService } from '../../shared/modal/modal.service';
import { LoadingService } from '../../shared/loading/loading.service';
import { Observable } from 'rxjs';
import { ModalOptions, ModalType } from '../../class/modal';
import { CommonUtilityModule } from '../../shared/common-utility/common-utility.module';
import {ApiCommonModule} from '../../service/api-common/api-common.module';
import { envData } from 'src/app/environment/environment';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { url } from 'inspector';
declare const cordova;
declare const window;
declare const document;


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  //@Input() menu:MenuNode;
  code: string;
  upperPath: string;
  path: string;
  inAppBrowserRef;
  subMenus: ObjectNode[];
  tabItem: MenuNode;
  tabMenus: MenuNode[];
  itemCount: number;
  selTab: string;
  selMenuBK: string;
  subMenusSplic: any;
  showIndicators: boolean = false;
  subMenuCnt: number = 0;
  iconPath: string = "assets/images/object-icon/"


  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private menuService: MenuService,
    //private mstrLoginService: MstrLoginService,
    protected apiCommon:ApiCommonModule,
    private commonUtility: CommonUtilityModule,
    private modalService: ModalService,
    //private loadingService: LoadingService,
    //private location: Location,
  ) {
    this.route.params.subscribe(
      (params: Params) => {
        this.code = params["code"];
        // this.selMenuBK= commonUtility.tranNull(this.commonUtility.getSessionValue("selMenuBK"));
        this.selMenuBK = this.commonUtility.getSessionValue("selMenuBK");
        if (this.selMenuBK == 'null') {
          this.selMenuBK = 'pic-Default';
        }
        if (this.code != null) {
          //console.warn("content_A" + this.code);
          this.getTabMenu(this.code);
        }
        else {
          //console.warn("content_B" + this.code);
          //this.subMenus = JSON.parse(sessionStorage.getItem("object"));
        }
        // this.menuService.getSubMenus(this.code)
        // .subscribe(subMenus=>this.subMenus= subMenus);
      }
    );
    // this.itemCount = this.subMenus.length;
  }

  ngOnInit() {
    //let code = this.route.snapshot.paramMap.get('code');
    console.log("content_init_" + this.code);
    // this.selMenuBK= commonUtility.tranNull(this.commonUtility.getSessionValue("selMenuBK"));
    this.selMenuBK = this.commonUtility.getSessionValue("selMenuBK");
    if (this.selMenuBK == 'null') {
      this.selMenuBK = 'pic-Default';
    }
    console.log("content_init_BK_" + this.selMenuBK);
    if (this.code != null) {
      this.getTabMenu(this.code)
    }
  }
  getTabMenu(code: string): void {
    this.tabItem = JSON.parse(this.commonUtility.getSessionValue("currentMenu"));
    this.upperPath = this.tabItem.web_func_display_text;
    this.path = "";
    if (this.tabItem.children != null) {
      this.tabMenus = this.tabItem.children;
      this.tabMenus.sort((a, b) => a.upper_display_order - b.upper_display_order);
      this.tabChanged(this.tabMenus[0]);
      // this.getSubMenu(this.tabMenus[0].web_function);
    }
    else {
      this.tabMenus = null;
      this.getSubMenu(code);
    }
  }

  tabChanged(code: MenuNode) {
    this.selTab = code.web_function;
    this.path = code.web_func_display_text;
    this.getSubMenu(code.web_function);
    // this.getSubMenu(${$event.tab})
    // this.messages.push(`Selected Index: ${$event.index} Label: ${$event.tab.label}`);
    // this.logMessage = this.messages.join('\n');
  }

  getSubMenu(code: string): void {

    //const code = +this.route.snapshot.paramMap.get('code');
    console.log(this.route.snapshot.paramMap);
    console.warn(code + '_content');
    this.menuService.getSubMenus(code)
      .subscribe(subMenus => this.subMenus = subMenus);

    this.subMenus.sort((a, b) => a.display_order - b.display_order);
    this.subMenuCnt = 0;
    this.subMenus.forEach(obj => {
      this.subMenuCnt++;
      if (obj.web_obj_display_image != 'null' && obj.web_obj_display_image.toUpperCase() != 'X') {
        obj.web_obj_display_image = `${this.iconPath}${obj.web_obj_display_image}.png`;
      }
      else {
        obj.web_obj_display_image = `${this.iconPath}icon-default.png`;
      }

    });
    this.subMenusSplic = this.chunks();
    if (this.subMenuCnt > this.commonUtility.contentSize) {
      this.showIndicators = true;
    }
    else {
      this.showIndicators = false;
    }
    // menus=>this.menus=menus
    console.log("submenu_" + this.subMenuCnt + "_" + this.showIndicators);
  }
/*   checkMstrNeedLogin(dashboardUseMode: string): boolean {
    var mstrSession: MstrSessionDetail;
    var dateNow: string;
    var needLogin: boolean = true;
    dateNow = this.commonUtility.Date + this.commonUtility.TimeStamp
    mstrSession = this.getMstrSession(dashboardUseMode);
    if (mstrSession != null) {
      if (mstrSession.sessionExpiredTime >= dateNow) {
        needLogin = false;
      }
    }
    return needLogin;
  } */
/*   getMstrSession(dashboardUseMode: string): MstrSessionDetail {
    var mstrSession: MstrSessionDetail = null;
    switch (dashboardUseMode.toUpperCase()) {
      case "CURRENT USER_N":
      case "CURRENT USER":
        if (sessionStorage.getItem("CurrentSession") != null) {
          mstrSession = JSON.parse(this.commonUtility.getSessionValue("CurrentSession"));
        }
        break;
      default:
        if (sessionStorage.getItem("SingleSession") != null) {
          mstrSession = JSON.parse(this.commonUtility.getSessionValue("SingleSession"));
        }
        break;
    }
    return mstrSession;
  } */
  
  /* mstrLogin(menu: ObjectNode, target:string) {
    var mstrSession: MstrSessionDetail;
    var bolIsNeedLogin: boolean;
    var dashboardUseMode: string = menu.dashboard_use_mode;
    var msg: ModalOptions;
    var result: boolean = true;
    var now = new Date();
    now.setMinutes(now.getMinutes() + 8); // timestamp
    now = new Date(now); // Date object

    var urlLink: string = menu.web_obj_link_url;      //報表連結
    var arrUrlParm: string[] = urlLink.split("&");    //參數array

    var mstrProject: string;
    var mstrPort: string;

    var url:string= "";
    console.log(target);
    bolIsNeedLogin = this.checkMstrNeedLogin(dashboardUseMode);
    arrUrlParm.forEach(parm => {
      var parmVal: string[] = parm.split("=")
      switch (parmVal[0].toUpperCase()) {
        case "PROJECT":
          mstrProject = parmVal[1];
          break;
        case "PORT":
          mstrPort = parmVal[1];
          break;
        default:
          break;
      };
    });
    if (bolIsNeedLogin) {
      this.mstrLoginService.mstrLogin(mstrProject, this.commonUtility.getSessionValue("loginUser"), dashboardUseMode)
        .subscribe(
          res => {
            this.loadingService.hide();
            switch (res.ResponseDetails.responseCode) {
              case "000":
                let mstrSession:MstrSessionDetail={
                  dashboardUseMode : dashboardUseMode,
                  sessionInfo:res.sessionInfo,
                  sessionState:res.sessionState,
                  sessionExpiredTime:this.commonUtility.formatDate(now)+this.commonUtility.formatTime(now),
                  iServer:res.iServer,
                  iisServer:res.iisServer
                };
                switch(dashboardUseMode.toUpperCase())
                {
                  case "CURRENT USER_N":
                    case "CURRENT USER":
                      this.commonUtility.setSessionValue("CurrentSession",JSON.stringify(mstrSession));
                      break;
                    default:
                      this.commonUtility.setSessionValue("SingleSession",JSON.stringify(mstrSession));
                      break;
                }                
                console.log("login");
                console.log(mstrSession);
                this.exexDoc(arrUrlParm,mstrSession,menu.web_obj_attribute,target);
                result=true;
                break;
              case "008":
                msg = {
                  headText: 'MSTR登入失敗',
                  txtContent: res.ReasonCode.map(
                    item =>
                      `${item.reasonMsg}(錯誤碼：${item.reasonCode})`
                  )
                    .join(' '),
                  type: ModalType.Confirm
                };
                this.modalService.open(msg,'sm');
                result = false;
                break;
              default:
                msg = {
                  headText: 'MSTR登入失敗',
                  txtContent: '資料異常，請聯絡系統管理員。',
                  type: ModalType.Confirm
                };
                this.modalService.open(msg,'sm');
                result = false;
                break;
            };
          },        
          ()=>{
            console.log('mstrlogin_oncomplete');
            if (result)
            {
              console.log(mstrSession);
            }
          }
        )
    }
    else {
      console.log("no login");
      mstrSession = this.getMstrSession(dashboardUseMode);
      this.exexDoc(arrUrlParm,mstrSession,menu.web_obj_attribute,target);
    }
  }
 */
/*   exexDoc(arrUrlParm:string[], mstrSession:MstrSessionDetail, objAttribute:string, target:string ){
    var urlPrefix: string = this.commonUtility.getUrlPrefix();
    var rptUrl: string = "/microstrategy/asp/Main.aspx?";
    var dashboardUseMode= mstrSession.dashboardUseMode;
    var UrlParm: string = "";
    var domain:string = mstrSession.iisServer;
    var iServer:string=mstrSession.iServer;
    var mstrLoginSession ="";
    var msg: ModalOptions;
    var url:string= "";
    console.log("execDoc");
    // switch (envData.env) {
    //   case "10":
    //     domain = "113.196.86.112";
    //     break;
    // }
    switch (dashboardUseMode.toUpperCase()) {
      case "CURRENT USER_N":
        mstrLoginSession = mstrSession.sessionInfo;
        break;
      default:
        mstrLoginSession = mstrSession.sessionState;
        UrlParm = "Server=" + iServer + "&";
        break;
    }
    arrUrlParm.forEach(parm => {
      var parmVal: string[] = parm.split("=")
      switch (dashboardUseMode.toUpperCase()) {
        case "CURRENT USER_N":
          switch (parmVal[0].toUpperCase()) {
            case "CURRENTVIEWMEDIA":
            case "VISMODE":
              switch (objAttribute.toUpperCase()) {
                case "DASHBOARD":
                  //UrlParm += "&share=1";
                  break;
                default:
                  UrlParm += parm + "&";
                  break;
              }
              break;
            case "PROJECT":
            case "SERVER":
            case "PORT":
              break;
            default:
              UrlParm += parm + "&";
              break;
          }
          break;
        case "CURRENT USER":
        case "SINGLE USER":
          switch (parmVal[0].toUpperCase()) {
            case "CURRENTVIEWMEDIA":
            case "VISMODE":
              switch (objAttribute.toUpperCase()) {
                case "DASHBOARD":
                  //UrlParm += "&share=1";
                  break;
                default:
                  UrlParm += parm + "&";
                  break;
              }
              break;
            default:
              UrlParm += parm + "&";
              break;
          }
          break;
      }

    });
    switch (objAttribute.toUpperCase()) {
      case "DASHBOARD":
        UrlParm += "share=1&";
        break;
    }
    UrlParm += "hiddensections=header,path,dockTop,dockLeft,footer&";
    UrlParm += "mstrSmgr=" + mstrLoginSession;
    // this.modalService.open(msg,'lg');
    // console.log(urlPrefix + domain + rptUrl + UrlParm);
    //this.commonUtility.openUrl('', '_blank');
    url = urlPrefix + domain + rptUrl + UrlParm
    sessionStorage.setItem("objUrl",urlPrefix + domain + rptUrl + UrlParm );
    console.log(urlPrefix + domain + rptUrl + UrlParm);
    // this.commonUtility.openRouteUrl(url,'_blank');
    //this.openDoc();
    this.commonUtility.openUrl(urlPrefix + domain + rptUrl + UrlParm, target);
  } */
  RestApi(menu: ObjectNode, target:string)
  {
    var msg:ModalOptions;
    var apiId:string = "mstrRestApiPage";
    var ApiConfig:IApiConfig = this.apiCommon.getApiConfigByApiID(apiId);
    var parm:string ="";

    const apiUrl = `${ApiConfig.domain}${ApiConfig.path}`;

    parm = "?SystemCode=" +this.commonUtility.systemId;
    parm += "&Token="+this.commonUtility.getSessionValue('authenticationToken');
    parm += "&ObjectId="+menu.web_object;
    parm += "&accType="+this.commonUtility.accType;
    console.warn(apiUrl+parm);
    msg={
      headText:'',
      //txtContent:"aaaaaa",
      linkContent :apiUrl+parm,
      type:ModalType.Doc
    }; 
    
    this.modalService.openCustome(msg,'full');
    //this.commonUtility.openUrl(apiUrl+parm, target);
    //this.testOpenUrl(apiUrl+parm, target);
  }

  chunks() {
    let results = [];
    results = [];
    console.log(this.subMenus.length);
    while (this.subMenus.length) {
      results.push(this.subMenus.splice(0, this.commonUtility.contentSize));
    }
    console.log(results);
    return results;
  }
  testOpenUrl(url:string, target:string)
  {
   // document.cordova.InAppBrowser.open(encodeURI(url), target, 'location=no,closebuttoncaption=關閉,hidenavigationbuttons=yes');
   console.log(url);
    document.addEventListener('deviceready', () => {
      console.warn("AAA");
      //cordova.InAppBrowser.open(encodeURI(url), target, 'location=no,closebuttoncaption=關閉,hidenavigationbuttons=yes');
      window.open = cordova.InAppBrowser.open;
      window.open(encodeURI(url), target, 'location=no,closebuttoncaption=關閉,hidenavigationbuttons=yes');
      //var ref=cordova.InAppBrowser.open(encodeURI(url), target, 'location=no,closebuttoncaption=關閉,hidenavigationbuttons=yes');
    },false) ;   
  }
  test(parm: string) {
    console.log(parm);
  }
}
function onDeviceReady() {
  throw new Error('Function not implemented.');
}

