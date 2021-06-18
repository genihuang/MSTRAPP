import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import { Observable , throwError, TimeoutError, of } from 'rxjs';
import { map, filter, distinctUntilChanged, catchError, timeout, switchMap,retry } from 'rxjs/operators';

import {ApiCommonModule} from '../service/api-common/api-common.module';
import {CommonUtilityModule} from '../shared/common-utility/common-utility.module';
import {LoadingService} from '../shared/loading/loading.service';

//import {MenuNode,ObjectNode, MyFlatTreeNode}from '../class/menu';
import * as login from '../class/login';
import { IApiConfig } from '../class/environment';

@Injectable({
  providedIn: 'root'
})
export class MstrLoginService {

  ApiConfig:IApiConfig;
  constructor(    
    protected apiCommon:ApiCommonModule,
    protected commonUtility:CommonUtilityModule,
    private loadingService:LoadingService,
    private http: HttpClient
    ) { }
    mstrLogin(project:string,userID:string,dashboardUseMode:string): Observable<login.resMstrLogin>{
      var apiId:string = "mstrLogin";
      console.log(apiId);
      this.ApiConfig = this.apiCommon.getApiConfigByApiID(apiId);
      const apiUrl = `${this.ApiConfig.domain}${this.ApiConfig.path}`;
      console.log(apiUrl);
  
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':'application/json',
          'authenticationToken':this.commonUtility.getSessionValue('authenticationToken')
        })
      };
      this.loadingService.show();
      const rqbody:login.reqMstrLogin={
        MetaData:this.apiCommon.reqCommon,
        project:project,
        userID:userID,
        dashboardUseMode:dashboardUseMode
      }
  
      console.log(rqbody);
      return this.http.post<login.resMstrLogin>(apiUrl, JSON.stringify(rqbody), httpOptions)
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
}
