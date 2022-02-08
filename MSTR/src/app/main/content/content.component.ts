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
    var modaltype = ModalType.Doc;
    //this.modalService.openCustome(msg,'full');
    this.commonUtility.openUrl(apiUrl+parm, target,modaltype);
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
  test(parm: string) {
    console.log(parm);
  }
}
function onDeviceReady() {
  throw new Error('Function not implemented.');
}


