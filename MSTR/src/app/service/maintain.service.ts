import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import { Observable , throwError, TimeoutError, of } from 'rxjs';
import { map, filter, distinctUntilChanged, catchError, timeout, switchMap,retry } from 'rxjs/operators';

import {ApiCommonModule} from '../service/api-common/api-common.module';
import {CommonUtilityModule} from '../shared/common-utility/common-utility.module';
import {LoadingService} from '../shared/loading/loading.service';

//import {MenuNode,ObjectNode, MyFlatTreeNode}from '../class/menu';
import * as Maintain from '../class/maintain';
import * as CommonClass from '../class/common';
import { IApiConfig } from '../class/environment';
import { ReturnStatement } from '@angular/compiler';
// import {menuData,ObjectData} from '../mock-data/menu';

@Injectable({
  providedIn: 'root'
})
export class MaintainService {
  ApiConfig:IApiConfig;
  constructor(
    protected apiCommon:ApiCommonModule,
    protected commonUtility:CommonUtilityModule,
    private loadingService:LoadingService,
    private http: HttpClient
  ) { }
  getMaintainData (): Observable<Maintain.resMaintain> {
    console.log("getMaintainData");
    var apiId:string = "maintainData";
    var pi_CommonData:CommonClass.reqCommon;
    this.ApiConfig = this.apiCommon.getApiConfigByApiID(apiId);
    const apiUrl = `${this.ApiConfig.domain}${this.ApiConfig.path}`;
    console.log(apiId);
    console.log(apiUrl);
    const httpOptions = {
      headers: new HttpHeaders({
        'Origin':'http://MSTR',
        'Content-Type':'application/json'
      })
    };
    
    this.loadingService.show();
    pi_CommonData=this.apiCommon.reqCommon;
    pi_CommonData.KeyId = this.ApiConfig.keyId;
    const pi_GetMaintainData:Maintain.MaintainData={
      Format:"1"
    }
    const rqbody:Maintain.reqMaintain={
      pi_CommonData:pi_CommonData,
      pi_GetMaintainData:pi_GetMaintainData
    }

    console.log(rqbody);
    return this.http.post<Maintain.resMaintain>(apiUrl, JSON.stringify(rqbody), httpOptions)
      .pipe(
        timeout(90 * 1000),
        catchError( error => {
          console.log('error:', error);

          this.loadingService.hide();

          if (error instanceof TimeoutError) {
            // this.nativeService.alert({
            //   TITLE: '系統連線逾時',
            //   TYPE: 'CONFIRM',
            // }).subscribe(()=>{
            //   localStorage.clear();
            //   this.nativeService.close();
            // });
          }
          return throwError( error );
        }),
      );
  }  
}
