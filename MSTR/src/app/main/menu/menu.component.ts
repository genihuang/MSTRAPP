import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { NxTreeFlatDataSource, NxFlatTreeControl, NxTreeNode, NxFlatTreeNode } from '@allianz/ngx-ndbx/tree';
import {NxMenuModule} from '@allianz/ngx-ndbx/menu'
import { Observable, of } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {MyFlatTreeNode,MenuNode} from '../../class/menu';
import {ModalOptions,ModalType} from '../../class/modal';
import {MenuService} from '../../service/menu.service';
import {ModalService} from '../../shared/modal/modal.service';
import {LoadingService} from '../../shared/loading/loading.service';
import {ApiCommonModule} from '../../service/api-common/api-common.module';
import {CommonUtilityModule} from '../../shared/common-utility/common-utility.module';
import {AppComponent} from '../../app.component'
import { Title } from '@angular/platform-browser';
import { stringify } from 'querystring';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  _dataSource: NxTreeFlatDataSource<MenuNode, MyFlatTreeNode>;

  _treeControl: NxFlatTreeControl<MyFlatTreeNode>;
  menuData:MenuNode[];
  childData:MenuNode[];
  logMessage: string;
  messages = [];
  bodyText: string;

  constructor(
    private menuService:MenuService,
    private commonUtility:CommonUtilityModule,
    private modalService:ModalService,
    private apiCommon:ApiCommonModule,
    private routes:Router,
    private loadingService:LoadingService,
    private appComponent:AppComponent,
    //private ngbModalService: NgbModal
  ) {
    this._treeControl = new NxFlatTreeControl();
    this._dataSource = new NxTreeFlatDataSource(this._treeControl, this.menuData);
    if (sessionStorage.getItem("menu") !=null ||sessionStorage.getItem("object")!=null)
    {
      this.menuData = JSON.parse(this.commonUtility.getSessionValue("menu"));
      console.log("constructor");
    }
  }

  _hasChild = (_: number, node: NxFlatTreeNode) => node.expandable;


  log(value) {
    this.messages.push('New width value: ' + value);
    this.logMessage = this.messages.join('\n');
  }

  ngOnInit() {
    this.getMenus();
  }

  getMenus():void{
    if (sessionStorage.getItem("menu") ==null ||sessionStorage.getItem("object")==null)
    {
      var msg:ModalOptions;
      this.menuService.getMenus()
      .subscribe(
        res=>{
          console.log('get Menu OK');
          console.log(res);
          this.loadingService.hide();
          switch (res.ReturnCode) {
            case 0:
              sessionStorage.setItem("menu",JSON.stringify(res.ReturnResult.menu) );
              sessionStorage.setItem("object",JSON.stringify(res.ReturnResult.object) );
              this._treeControl = new NxFlatTreeControl();
              this._dataSource = new NxTreeFlatDataSource(this._treeControl, JSON.parse(this.commonUtility.getSessionValue("menu")) );
              this.menuData = JSON.parse(this.commonUtility.getSessionValue("menu"));
              // this.menuData.sort();
              break;
            default:
              msg={
                headText:'選單資訊',
                txtContent :'取得功能選單發生錯誤。',
                type:ModalType.Confirm
              };          
              this.modalService.open(msg,'sm');
              break;
          };
        }
      );
    }
    else
    {
      console.log("oninit");
      this.menuData = JSON.parse(this.commonUtility.getSessionValue("menu")); 
      this._treeControl = new NxFlatTreeControl();
      this._dataSource = new NxTreeFlatDataSource(this._treeControl, JSON.parse(this.commonUtility.getSessionValue("menu")) );
    }
  }
  menuItemClick(item:MenuNode) {
    this.menuData.forEach(allItem => {
      allItem.expanded=false;
    });
    item.expanded=true;
    sessionStorage.setItem("selMenuBK",item.web_menu_display_background);

    if (item.children)
    {
      this.childData = item.children;
      this.childData.sort((a,b)=>a.upper_display_order-b.upper_display_order);
      this.childItemClick(item,this.childData[0]);
    }
    else
    {
      this.func(item);
    }
  }
  childItemClick(item,child)
  {
    sessionStorage.setItem("currentMenu",JSON.stringify(child) );
    console.log(child);
    this.func(child);
  }
  func(item:MenuNode)
  {
    console.log(item.web_function);
    sessionStorage.setItem("currentMenu",JSON.stringify(item) );
    this.routes.navigate(['/main', item.web_function]);
  }
  home()
  {
    this.menuData.forEach(allItem => {
      allItem.expanded=false;
    });
    this.routes.navigateByUrl('/main');
  }
  logout()
  {
    this.appComponent.logout();
    // sessionStorage.clear();
    // this.routes.navigateByUrl('/');
    // this.commonUtility.logout();
  }
  modifyPwd(){
    var Page:string;
    var account = this.commonUtility.getSessionValue("loginUser");
    Page = this.apiCommon.getApiUrl("modifyPwdPage");
    this.commonUtility.modifyPwd(account,Page);
    // this.logout();
  }

}
