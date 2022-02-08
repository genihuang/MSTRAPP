import * as commonData from './common'

export interface resGenerateSetupCode{
    ResponseDetails?:commonData.ResponseDetails,
    ReasonCode?:commonData.ReasonCode[],
    OutputData?:GenerateSetupCodeDetail
}
export interface reqValidateTwoFactorPin{
    MetaData?:commonData.reqCommon,
    ReqData?:validateTwoFactorPinDetail
}
export interface GenerateSetupCodeDetail
{
    Status?:string,
    QrCodeSetupImageUrl?:string,
    OtpAuth?:string
}
export interface validateTwoFactorPinDetail{
    ValidateSource?:string,
    Pin?:string
}