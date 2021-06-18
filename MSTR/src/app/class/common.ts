export interface reqCommon {
    RequestDate?:string;
    RequestTimeStamp?:string;
    RequestTime?:string;
    ChannelID?:string;
    RequestUserID?:string;
    SystemCode?:string;
    SystemID?:string;
    KeyId?:string;
}
export interface resCommon{
    ResponseDetails?:ResponseDetails;
    ReasonCode?:ReasonCode[];
}
export interface resCommonAPI{
    ReturnCode?:number;
    ReturnMessage?:string;
}

export interface ResponseDetails{
    responseCode?:string;
    TrackingNumber?:string;
}

export interface ReasonCode {
    reasonCode?: string;
    reasonMsg?:string;
}

export interface NameValue{
    Name?:string;
    Value?:string;
}