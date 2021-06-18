import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import { Observable , throwError, TimeoutError, of } from 'rxjs';
import { map, filter, distinctUntilChanged, catchError, timeout, switchMap,retry } from 'rxjs/operators';

import {ApiCommonModule} from '../service/api-common/api-common.module';
import {CommonUtilityModule} from '../shared/common-utility/common-utility.module';
import {LoadingService} from '../shared/loading/loading.service';

//import {MenuNode,ObjectNode, MyFlatTreeNode}from '../class/menu';
import * as Menu from '../class/menu';
import { IApiConfig } from '../class/environment';
// import {menuData,ObjectData} from '../mock-data/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  apiId:string = "mstrMenu";
  ApiConfig:IApiConfig;
  constructor( 
    protected apiCommon:ApiCommonModule,
    protected commonUtility:CommonUtilityModule,
    private loadingService:LoadingService,
    private http: HttpClient
  ) { }
  getMenus(): Observable<Menu.resMenu>{
    console.log(this.apiId);
    this.ApiConfig = this.apiCommon.getApiConfigByApiID(this.apiId);
    const apiUrl = `${this.ApiConfig.domain}${this.ApiConfig.path}`;
    console.log(apiUrl);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'UKEY':this.commonUtility.getSessionValue('authenticationToken'),
        'KeyId':this.ApiConfig.keyId
      })
    };
    this.loadingService.show();
    const rqbody:Menu.reqMenu={
      UKEY:this.commonUtility.getSessionValue('authenticationToken'),
      WEB_SYSTEM_CODE:this.commonUtility.systemCode,
      USER_ID:this.commonUtility.getSessionValue('loginUser')
    };

    console.log(rqbody);
    return this.http.post<Menu.resMenu>(apiUrl, JSON.stringify(rqbody), httpOptions)
      .pipe(
        timeout(90 * 1000),
        catchError( error => {
          console.log('error:', error);

          this.loadingService.hide();

          if (error instanceof TimeoutError) {
          }
          return throwError( error );
        })
      );
  }

  getSubMenus(code:string):Observable<Menu.ObjectNode[]>{
    let objData:Menu.ObjectNode[] = JSON.parse(sessionStorage.getItem("object"));

    console.log(code+"_Service");
    console.log(code);
    console.log(objData);
    console.log(objData.filter(menu=>menu.web_function==code));
    return of(objData.filter(menu=>menu.web_function==code))
    //return of (ObjectData.find(menu=>menu.web_function==code));
    //return of(HEROES.find(hero=>hero.id==id));
  }
}
