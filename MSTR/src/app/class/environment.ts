export interface envConfig {
    env?: string;
    systemId?:string;
    systemCode?:string;
    version?:string;
    platform?:string;
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
}

