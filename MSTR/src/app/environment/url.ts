
import { IApiConfig, IApiDomain } from '../class/environment';
import { map } from 'rxjs/operators';

// export const mstrApiDomain:string='http://113.196.86.118/wsUtility/MSTR/getApiUrl';


export const apiDomain_Uat: IApiDomain[] = ([
    {
        apiDomainKey: "utility",
        //apiDomain:"http://t2.allianz.com.tw/wsUtility/"
        apiDomain:"https://esuat.allianz.com.tw/service/wsUtility/"
    },
    {
        apiDomainKey: "discover",
        //apiDomain:"http://t2.allianz.com.tw/wsIllustrationIII/"
        apiDomain:"https://esuat.allianz.com.tw/service/wsIllustrationIII/"
    },
    {
        apiDomainKey: "wsaz",
        //apiDomain: "https://t5.allianz.com.tw/WSAZ/"
        apiDomain:"https://esuat.allianz.com.tw/service/WSAZ/"
    },
    {
        apiDomainKey: "MstrPage",
        //apiDomain: "http://t1.allianz.com.tw/MSTR/"
        apiDomain: "https://esuat.allianz.com.tw/partner/MSTR/"
    },
    {
        apiDomainKey:"w2Util_pp",
        //apiDomain:"http://t5.allianz.com.tw/w2Util/"
        apiDomain:"https://esuat.allianz.com.tw/service/w2Util/"
    },
    {
        apiDomainKey:"AZPL",
        //apiDomain:"http://t1.allianz.com.tw/eProCommonsite/"
        apiDomain:"https://esuat.allianz.com.tw/partner/eProCommonsite/"
    },
    {
        apiDomainKey:"w2UtilAPI",
        //apiDomain:"http://t5.allianz.com.tw/w2UtilAPI/"
        apiDomain:"https://esuat.allianz.com.tw/service/w2UtilAPI/"
    }
]);
export const apiConfig_Uat: IApiConfig[] = ([
    {
        apiID: "appLogin",
        keyId: ""
    },
    {
        apiID: "mstrLogin",
        keyId: ""
    },
    {
        apiID: "mstrRestApiLogin",
        keyId: ""
    },
    {
        apiID:"mstrRestApiPage",
        keyId:""
    },
    {
        apiID: "mstrMenu",
        keyId: "yAARveQNJZMgeutaObybFjaquxgafUbiyHtbhyzD"
    },
    {
        apiID: "versionCheck",
        keyId: ""
    },
    {
        apiID:"checkPwdWs",
        keyId:""
    },
    {
        apiID:"modifyPwdPage",
        keyId:""
    },
    {
        apiID:"forgetPwdPage",
        keyId:""
    },
    {
        apiID:"maintainData",
        keyId:"1EECE5B6-3A06-4F0D-BF72-FD08762D2B1C"
    }
]);

export const apiDomain_PreProd: IApiDomain[] = ([
    {
        apiDomainKey: "utility",
        apiDomain: 'http://113.196.86.105/wsUtility/'
    },
    {
        apiDomainKey: "discover",
        apiDomain: "http://113.196.86.105/wsIllustrationIII/"
    },
    {
        apiDomainKey: "wsaz",
        apiDomain: "https://preW2.allianz.com.tw/WSAZ/"
    },
    {
        apiDomainKey: "MstrPage",
        // apiDomain: "http://113.196.86.102/WSAZ/"
        apiDomain: "https://preW2.allianz.com.tw/MSTR/"
    },

    {
        apiDomainKey:"w2Util_pp",
        apiDomain:"https://preW2.allianz.com.tw/w2Util/"
    },
    {
        apiDomainKey:"AZPL",
        apiDomain:"https://preW2.allianz.com.tw/eProCommonsite/"
    },
    {
        apiDomainKey:"w2UtilAPI",
        //apiDomain:"http://t5.allianz.com.tw/w2UtilAPI/"
        apiDomain:"https://preW2.allianz.com.tw/w2UtilAPI/"
    }
]);

export const apiConfig_PreProd: IApiConfig[] = ([
    {
        apiID: "appLogin",
        keyId: ""
    },
    {
        apiID: "mstrLogin",
        keyId: ""
    },
    {
        apiID: "mstrRestApiLogin",
        keyId: ""
    },
    {
        apiID:"mstrRestApiPage",
        keyId:""
    },
    {
        apiID: "mstrMenu",
        keyId: "RaWTMDZvIiZZxBIGQknYUqrpMJbmQccldLTkAcNH"
    },
    {
        apiID: "versionCheck",
        keyId: ""
    },
    {
        apiID:"checkPwdWs",
        keyId:""
    },
    {
        apiID:"modifyPwdPage",
        keyId:""
    },
    {
        apiID:"forgetPwdPage",
        keyId:""
    },
    {
        apiID:"maintainData",
        keyId:"5B98F6AD-5E60-4965-B9F1-5423C7275AAD"
    }
]);

export const apiDomain_Prod: IApiDomain[] = ([
    {
        apiDomainKey: "utility",
        //apiDomain: "https://first2.allianz.com.tw/wsUtility/"
        apiDomain: "https://es.allianz.com.tw/service/wsUtility/"
    },
    {
        apiDomainKey: "discover",
        //apiDomain: "https://first2.allianz.com.tw/wsIllustrationIII/"
        apiDomain:"https://es.allianz.com.tw/service/wsIllustrationIII/"
    },
    {
        apiDomainKey: "wsaz",
        //apiDomain: "https://w2.allianz.com.tw/WSAZ/"
        apiDomain:"https://es.allianz.com.tw/service/WSAZ/"
    },
    {
        apiDomainKey: "MstrPage",
        //apiDomain: "https://w2.allianz.com.tw/MSTR/"
        apiDomain: "https://es.allianz.com.tw/partner/MSTR/"
    },
    {
        apiDomainKey:"w2Util_pp",
        //apiDomain:"https://w2.allianz.com.tw/w2Util/"
        apiDomain:"https://es.allianz.com.tw/service/w2Util/"
    },
    {
        apiDomainKey:"AZPL",
        //apiDomain:"https://www.azpl.com.tw/eProCommonsite/"
        apiDomain:"https://es.allianz.com.tw/partner/eProCommonsite/"
    },
    {
        apiDomainKey:"w2UtilAPI",
        //apiDomain:"https://w2.allianz.com.tw/w2UtilAPI/"
        apiDomain:"https://es.allianz.com.tw/service/w2UtilAPI/"
    }
]);
export const apiConfig_Prod: IApiConfig[] = ([
    {
        apiID: "appLogin",
        keyId: ""
    },
    {
        apiID: "mstrLogin",
        keyId: ""
    },
    {
        apiID: "mstrRestApiLogin",
        keyId: ""
    },
    {
        apiID:"mstrRestApiPage",
        keyId:""
    },
    {
        apiID: "mstrMenu",
        keyId: "gVSAxjUcjoYOBTCejyGcfChltsJxdVOxGFZSZMSw"
    },
    {
        apiID: "versionCheck",
        keyId: ""
    },
    {
        apiID:"checkPwdWs",
        keyId:""
    },
    {
        apiID:"modifyPwdPage",
        keyId:""
    },
    {
        apiID:"forgetPwdPage",
        keyId:""
    },
    {
        apiID:"maintainData",
        keyId:"6EF77201-21A7-46DF-926A-825737DF6608"
    }
]);







