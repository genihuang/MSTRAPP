import * as commonData from './common'
export interface reqLogin {
    MetaData?:commonData.reqCommon,
    LoginData?:loginData
}
export interface resLogin{
    ResponseDetails?:commonData.ResponseDetails,
    ReasonCode?:commonData.ReasonCode[],
    TokenData?:tokenData
}

export interface reqMstrLogin{
    MetaData?:commonData.reqCommon,
    project?:string,
    userID?:string,
    dashboardUseMode?:string,
    pwd?:string
}
export interface resMstrLogin{
    ResponseDetails?:commonData.ResponseDetails,
    ReasonCode?:commonData.ReasonCode[],
    iisServer?:string,
    iServer?:string,
    sessionState?:string,
    sessionInfo?:string,
    project?:string,
    name?:string,
    resCode?:string,
    msgID?:string,
    authModeValue?:string,
    port?:string,
    version?:string
}

export interface reqVersionData{
    MetaData?:commonData.reqCommon,
    AppVersion?:string,
    LastUpdateTime?:string,
    DeviceSystemType?:string  
}

export interface resVersionStatus{
    ResponseDetails?:commonData.ResponseDetails,
    ReasonCode?:commonData.ReasonCode[],
    AppVersionStatus?:AppVersionStatus,
    DataVersionStatus?:VersionStatus[]
}

export interface loginData
{
    DeviceID?:string,
    Account?:string,
    Password?:string
}
export interface tokenData
{
    Token?:string,
    StartTime?:string,
    EndTime?:string
}

export interface AppVersionStatus
{
    AppVersion?:string,
    NeedUpdate?:string,
    AppLink?:string,
    Description?:string,
    NeedDelete?:string
}

export interface VersionStatus{
    Code?:string,
    Version?:string,
    NeedUpdate?:string,
    Type?:string,
    File?:string,
    FileExFileName?:string,
    sqlite?:string,
    Zip?:string
}
