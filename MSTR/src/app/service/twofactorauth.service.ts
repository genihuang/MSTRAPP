import { Injectable, Input } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';

import { Observable , throwError, TimeoutError, of } from 'rxjs';
import { map, filter, distinctUntilChanged, catchError, timeout, switchMap,retry, last } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

import {CommonUtilityModule} from '../shared/common-utility/common-utility.module';
import {LoadingService} from '../shared/loading/loading.service';
import {ApiCommonModule} from './api-common/api-common.module';
import { IApiConfig } from '../class/environment';
import * as twofactorauth from '../class/twofactorauth';
import * as commonData from '../class/common';
import { BADQUERY } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class TwofactorauthService {
  ApiConfig:IApiConfig;
  constructor(    
    protected apiCommon:ApiCommonModule,
    protected commonUtility:CommonUtilityModule,
    private loadingService:LoadingService,
    private http: HttpClient
    ) { }
    generateSetupCode (token:string): Observable<twofactorauth.resGenerateSetupCode> {
      var apiId:string = "generateSetupCode";
      switch(this.commonUtility.accType)
      {
        case "1":
          apiId="generateSetupCode";
          break;
        default:
          break;
      }
      console.log(apiId);
      this.ApiConfig = this.apiCommon.getApiConfigByApiID(apiId);
      const apiUrl = this.apiCommon.getApiUrl(apiId);
      console.log(apiUrl);
  
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':'application/json',
          'apiKey':this.ApiConfig.keyId,
          'authenticationToken':token
        })
      };
      this.loadingService.show();
  
  
      return this.http.post<twofactorauth.resGenerateSetupCode>(apiUrl, "", httpOptions)
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
    validateTwoFactorPIn(pin:string, validateSource:string): Observable<commonData.resCommon>{
      var apiId:string = "validateTwoFactorPIN";
      switch(this.commonUtility.accType)
      {
        case "1":
          apiId="validateTwoFactorPIN";
          break;
        default:
          break;
      }
      console.log(apiId);
      this.ApiConfig = this.apiCommon.getApiConfigByApiID(apiId);
      const apiUrl = this.apiCommon.getApiUrl(apiId);
      console.log(apiUrl);
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':'application/json',
          'apiKey':this.ApiConfig.keyId,
          'authenticationToken':this.commonUtility.getSessionValue('authenticationToken')
        })
      };
      this.loadingService.show();
      const ReqData:twofactorauth.validateTwoFactorPinDetail={
        ValidateSource:validateSource,
        Pin:pin
      }
      const rqbody:twofactorauth.reqValidateTwoFactorPin={
        MetaData:this.apiCommon.reqCommon,
        ReqData:ReqData
      }
  console.warn(httpOptions);
  console.warn(rqbody);
      return this.http.post<commonData.resCommon>(apiUrl, JSON.stringify(rqbody), httpOptions)
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
}
