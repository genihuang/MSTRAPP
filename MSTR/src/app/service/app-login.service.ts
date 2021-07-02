import { Injectable, Input } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';

import { Observable , throwError, TimeoutError, of } from 'rxjs';
import { map, filter, distinctUntilChanged, catchError, timeout, switchMap,retry, last } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

import {CommonUtilityModule} from '../shared/common-utility/common-utility.module';
import {LoadingService} from '../shared/loading/loading.service';
import {ApiCommonModule} from './api-common/api-common.module';
import { IApiConfig } from '../class/environment';
import * as login from '../class/login';
import { BADQUERY } from 'dns';

@Injectable({
  providedIn: 'root',
})
export class AppLoginService {
  //rsbody:login.resLogin;
  ApiConfig:IApiConfig;
  constructor( 
    protected apiCommon:ApiCommonModule,
    protected commonUtility:CommonUtilityModule,
    private loadingService:LoadingService,
    private http: HttpClient
  ) { }

  appLogin (account:string, pwd:string): Observable<login.resLogin> {
    var apiId:string = "appLogin";
    switch(this.commonUtility.accType)
    {
      case "0":
        break;
      case "1":
        apiId="commonLogin";
        break;
    }
    console.log(apiId);
    this.ApiConfig = this.apiCommon.getApiConfigByApiID(apiId);
    const apiUrl = this.apiCommon.getApiUrl(apiId);
    console.log(apiUrl);
    console.warn()

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'apiKey':this.ApiConfig.keyId
      })
    };
    this.loadingService.show();
    const rqbody:login.reqLogin={
      MetaData:this.apiCommon.reqCommon,
      LoginData:{
        DeviceID:"TestD",
        Account:account,
        Password:pwd
      }
    }

    console.log(rqbody);

    return this.http.post<login.resLogin>(apiUrl, JSON.stringify(rqbody), httpOptions)
      .pipe(
        timeout(90 * 1000),
        
        catchError( error => {
          console.warn('error:', error);
          this.loadingService.hide();
          if (error instanceof TimeoutError) {
          }
          return throwError( error );
        }),
      );
  }

  versionCheck (appVersion:string, lastUpdateTime:string, platform:string): Observable<login.resVersionStatus> {
    var apiId:string = "versionCheck";
    switch(this.commonUtility.accType)
    {
      case "0":
        break;
      case "1":
        apiId="commonVersionCheck";
        break;
    }
    console.log(apiId);
    this.ApiConfig = this.apiCommon.getApiConfigByApiID(apiId);
    const apiUrl = this.apiCommon.getApiUrl(apiId);
    console.log(apiUrl);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'authenticationToken':this.commonUtility.getSessionValue('authenticationToken'),
        'apiKey':this.ApiConfig.keyId
      })
    };
    this.loadingService.show();
    const rqbody:login.reqVersionData={
      MetaData:this.apiCommon.reqCommon,
      AppVersion:appVersion,
      LastUpdateTime:lastUpdateTime,
      DeviceSystemType:platform
    }

    console.log(rqbody);

    return this.http.post<login.resVersionStatus>(apiUrl, JSON.stringify(rqbody), httpOptions)
      .pipe(
        timeout(90 * 1000),
        catchError( error => {
          console.log('error:', error);

          this.loadingService.hide();

          if (error instanceof TimeoutError) {
          }
          return throwError( error );
        }),
      );
  }
  getTokenDetail(): Observable<login.resTokenDetail> {
    var apiId:string = "tokenData";
    console.log(apiId);
    this.ApiConfig = this.apiCommon.getApiConfigByApiID(apiId);
    const apiUrl = this.apiCommon.getApiUrl(apiId);
    console.log(apiUrl);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'authenticationToken':this.commonUtility.getSessionValue('authenticationToken'),
        'apiKey':this.ApiConfig.keyId
      })
    };
    this.loadingService.show();
    const rqbody:login.reqVersionData={
      MetaData:this.apiCommon.reqCommon
    }

    console.log(rqbody);

    return this.http.post<login.resTokenDetail>(apiUrl, JSON.stringify(rqbody), httpOptions)
      .pipe(
        timeout(90 * 1000),
        catchError( error => {
          console.log('error:', error);

          this.loadingService.hide();

          if (error instanceof TimeoutError) {
          }
          return throwError( error );
        }),
      );
  }
}
