import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable , throwError, TimeoutError } from 'rxjs';

import {IApiConfig,IApiDomain} from '../../class/environment';
import * as commonClass from '../../class/common'
import {apiPath} from '../../environment/environment';
import * as url from '../../environment/url';
import {CommonUtilityModule} from '../../shared/common-utility/common-utility.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CommonUtilityModule
  ]
})
export class ApiCommonModule { 
  constructor( 
    protected commonUtility:CommonUtilityModule
  ) { }

  get allApiConfig():IApiConfig[]{
    var pApiConfig:IApiConfig[];
    switch (this.commonUtility.env) {
      case '10':
      case '14':
        pApiConfig = url.apiConfig_Uat;
        break;
      case '11':
      case '15':
        pApiConfig = url.apiConfig_PreProd;
        break;
      case '0':
      case '2':
        pApiConfig = url.apiConfig_Prod;
        break;
      default:
        pApiConfig = url.apiConfig_Prod;
        break;
    };
    
    pApiConfig.forEach(
      apiConfig => {
        apiConfig.domainKey=apiPath.find(path=>path.apiID==apiConfig.apiID).domainKey;
        if(this.commonUtility.isSubDomain=="Y"){
          apiConfig.domain=this.ApiDomain.find(domain=>domain.apiDomainKey==apiConfig.domainKey).apiSubDomain;
        }
        else{
          apiConfig.domain=this.ApiDomain.find(domain=>domain.apiDomainKey==apiConfig.domainKey).apiDomain;
        }
        apiConfig.path=apiPath.find(path=>path.apiID==apiConfig.apiID).path;
    });
    return pApiConfig;
  }

  public getApiConfigByApiID(apiId:string):IApiConfig{
    console.log(this.allApiConfig);
    return this.allApiConfig.find(apiConfig=>apiConfig.apiID==apiId);
  }

  get ApiDomain():IApiDomain[]{
    var pApiDomain:IApiDomain[];
    switch (this.commonUtility.env) {
      case '10':
      case '14':
        pApiDomain = url.apiDomain_Uat;
        break;
      case '11':
      case '15':
        pApiDomain = url.apiDomain_PreProd;
        break;
      case '0':
      case '2':
        pApiDomain = url.apiDomain_Prod;
        break;
      default:
        pApiDomain = url.apiDomain_Prod;
        break;
    }
    return pApiDomain;
  }

  public getApiUrl(apiID:string):string{
    var domain:string;
    var path:string;
    var apiConfig:IApiConfig[] =this.allApiConfig;

    domain = apiConfig.find(url=>url.apiID==apiID).domain;
    path = apiConfig.find(url=>url.apiID==apiID).path;
    return `${domain}${path}`;
  }

  get reqCommon():commonClass.reqCommon{
    const pReqCommon:commonClass.reqCommon={
      RequestDate:this.commonUtility.Date,
      RequestTimeStamp:this.commonUtility.TimeStamp,
      RequestTime:this.commonUtility.TimeStamp,
      SystemID:this.commonUtility.systemId,
      SystemCode:this.commonUtility.systemId
    }
    return pReqCommon;
  }


  get httpHeaders():HttpHeaders{
    let pHeaders=new HttpHeaders({
      'Content-Type':'application/json',
      'authenticationToken': sessionStorage.getItem('authenticationToken')
    })

    return pHeaders;
  }
  public errorHandle(error){
    let errorMessage='';
    if(error.error instanceof ErrorEvent){
      errorMessage =error.error.errorMessage;
    }else{
      errorMessage = `Error Code: ${error.status}\n Message:${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
