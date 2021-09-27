export interface envConfig {
    env?: string;
    systemId?:string;
    systemCode?:string;
    version?:string;
    platform?:string;
    useAcc?:string;//0：舊帳號，1：新帳號
    useSubDomain?:string;
    needMaintain?:string;
}

export interface IApiConfig {
    apiID?:string;
    domainKey?:string;
    domain?:string;
    path?:string;
    keyId?: string;
}

export interface IApiDomain{
    apiDomainKey?:string;
    apiDomain?:string;
    apiSubDomain?:string;
}

