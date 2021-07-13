import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import * as login from '../../class/login';
import * as env from '../../environment/environment';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Route } from '@angular/compiler/src/core';
declare const cordova;
declare const window;
declare const document;

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CommonUtilityModule { 
  constructor(
    private route:Router
  ) { 
  }
  public setSessionValue(key:string,value:string)
  {
    sessionStorage.setItem(key, value);    
  }
  public getSessionValue(key:string):string
  {
    return sessionStorage.getItem(key);
  }

  public setLocalValue(key:string,value:string){
    localStorage.setItem(key,value);
  }
  public getLocalValue(key:string):string{
    return localStorage.getItem(key);
  }

  public tranNull(value:string):string{
    var rtn:string
    rtn=value;
    if (value== null){
      rtn='';
    }
    return rtn;
  }
  public openUrl(url:string, target:string)
  {
    console.log(url);
    document.addEventListener('deviceready', () => {
      cordova.InAppBrowser.open(encodeURI(url), target, 'location=no,closebuttoncaption=關閉,hidenavigationbuttons=yes');
    }) ;   
  }
/* public openRouteUrl(DocUrl:string,target:string)
{
  var url = "doc.html";
  console.log('openRouteUrl');
  localStorage.setItem("objUrl",DocUrl);
  document.addEventListener('deviceready', () => {
    cordova.InAppBrowser.open(url, '_blank', 'location=yes,closebuttoncaption=關閉,hidenavigationbuttons=yes');
  });
}

public openRestApiTest(DocUrl:string,target:string)
{
  var url = "RestApiTest.html";
  console.log('RestApiTest');
  localStorage.setItem("objUrl",DocUrl);
  document.addEventListener('deviceready', () => {
    cordova.InAppBrowser.open(url, '_system', 'location=yes,closebuttoncaption=關閉,hidenavigationbuttons=yes');
  });
} */

  public modifyPwd(account:string, page:string){
    // modifyPwdPage = this.apiCommon.getApiUrl("modifyPwdPage");
    page+='&SystemID='+this.systemId + '&Account='+account;
    console.log(page);
    this.openUrl(page,"_blank");
  }

  public forgetPassword(page:string){
    // forgetPwdPage = this.apiCommon.getApiUrl("forgetPwdPage");
    // forgetPwdPage = "https://t1.allianz.com.tw/eProAgent/";
    page+='&SystemID='+this.systemId ;
    console.log(page);
    this.openUrl(page,"_blank");
  }
  public getUrlPrefix():string
  {
    var rtn:string="https://"
      switch(env.envData.env)
      {
        case "10":
          rtn="http://";
          break;
        default:
          rtn="https://";
          break;
      }
      return rtn;
  }

  public getEnvironment():string
  {
    var rtn:string;
    switch(env.envData.env)
    {
      case "0":
      case "2":
        rtn ="";
        break;
      case "10":
      case "14":
        rtn ="UAT";
        break;
      case "11":
      case "15":
        rtn="PreProd";
        break;
      default:
        rtn = "UAT";
        break;
    }
    return rtn;
  }
public formatDate(date:Date):string
{
  var rtn:string
  const year = date.getFullYear().toString();
  let month = (date.getMonth()+1).toString();
  month = (month.length < 2)? '0'+ month : month ;
  let day = (date.getDate()).toString();
  day = (day.length<2)?'0'+day:day;
  rtn =  year + month + day;
  return rtn;
}
public formatTime(date:Date):string
{
  var rtn:string
  let hour = date.getHours().toString();
  let min = date.getMinutes().toString();
  let sec = date.getSeconds().toString();
  hour = (hour.length<2)?'0'+hour:hour;
  min = (min.length<2)?'0'+min:min;
  sec = (sec.length<2)?'0'+sec:sec;
  rtn = hour + min + sec;
  return rtn;
}
  get contentSize():number{
    return env.contentSize;
  }

  get Date():string {
    const date = new Date();
    // const year = date.getFullYear().toString();
    // let month = (date.getMonth()+1).toString();
    // month = (month.length < 2)? '0'+ month : month ;
    // let day = (date.getDate()).toString();
    // day = (day.length<2)?'0'+day:day;

    // const rqdate =  year + month + day;
    const rqdate = this.formatDate(date);
    return rqdate;
  }

  get TimeStamp():string {
    const date = new Date();
    // let hour = date.getHours().toString();
    // let min = date.getMinutes().toString();
    // let sec = date.getSeconds().toString();
    // hour = (hour.length<2)?'0'+hour:hour;
    // min = (min.length<2)?'0'+min:min;
    // sec = (sec.length<2)?'0'+sec:sec;
    // const rqtime = hour + min + sec;
    const rqtime = this.formatTime(date);
    return rqtime;
  }

  get env():string{
    return env.envData.env;
  }
  get systemId():string{
    return env.envData.systemId;
  }

  get systemCode():string{
    return env.envData.systemCode;
  }
  get accType():string{
    return env.envData.useAcc;
  }
  //設定登入資訊
  private setToken(value:string){
    this.setSessionValue("authenticationToken",value);
    // sessionStorage.setItem("authenticationToken", value);
  }
  set Token(value:string)
  {
    this.setTokenEnd(value);
  }

  private setTokenStart(value:string){
    this.setSessionValue("TokenStart", value);
    // sessionStorage.setItem("TokenStart", value);
  }
  set TokenStart(value:string)
  {
    this.setTokenStart(value);
  }
  
  private setTokenEnd(value:string){
    this.setSessionValue("TokenEnd", value);
    // sessionStorage.setItem("TokenEnd", value);
  }
  set TokenEnd(value:string)
  {
    this.setTokenEnd(value);
  }

  set loginUser(value:string)
  {
    this.setSessionValue("loginUser", value);
    // sessionStorage.setItem("loginUser", value);
  }
  set accSource(value:string)
  {
    this.setSessionValue("accSource",value);
  }
  set agentId(value:string)
  {
    this.setSessionValue("agentId",value);
  }
  set TokenData(value:login.tokenData)
  {
    this.setToken(value.Token);
    this.setTokenStart(value.StartTime);
    this.setTokenEnd(value.EndTime);
  }
}
