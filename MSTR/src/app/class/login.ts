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
export interface resTokenDetail{
    ResponseDetails?:commonData.ResponseDetails,
    ReasonCode?:commonData.ReasonCode[],
    TokenDetail?:tokenDetail[]
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
export interface tokenDetail
{
    TOKEN?:string,
    LOGIN_SYSTEMID?:string,
    SYSTEMID?:string,
    BUSINESS_ID?:string,
    ROLE_TYPE?:string,
    SPECIAL_FUN?:string,
    JOB_GRADE?:string,
    START_DATE?:string,
    EXPIRETIME?:string,
    GUID_AGENTID?:string,
    SELLING_QUALIFICATION?:string,
    AGENT_ID?:number,
    STAFF_NO?:string,
    ACC_SOURCE?:string,
    ACCOUNT_NO?:string,
    CHANNEL_CODE?:string,
    SALES_OFFICE?:string,
    CHANNEL_TYPE?:string,
    AGENT_NAME?:string,
    LICENSE_NO?:string,
    SALES_OFFICE_NAME?:string,
    CHANNEL_NAME?:string,
    STATUS?:string,
    LOGIN_ACC?:string,
    NATIONAL_ID_ORI?:string,
    AGENT_ID_ORI?:number,
    LICENSE_NO_ORI?:string,
    CHANNEL_CODE_ORI?:string,
    CHANNEL_NAME_ORI?:string,
    EMAIL_ORI?:string,
    ACC_NO_ORI?:number,
    IS_IDENTITY_CHANGE?:string,
    DEVICEID?:string

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
