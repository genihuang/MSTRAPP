
import { IApiConfig, IApiDomain } from '../class/environment';
import { map } from 'rxjs/operators';

// export const mstrApiDomain:string='http://113.196.86.118/wsUtility/MSTR/getApiUrl';


export const apiDomain_Uat: IApiDomain[] = ([
    {
        apiDomainKey: "utility",
        apiDomain:"http://t2.allianz.com.tw/wsUtility/",
        apiSubDomain:"https://esuat.allianz.com.tw/service/wsUtility/"
    },
    {
        apiDomainKey: "discover",
        apiDomain:"https://t2.allianz.com.tw/wsIllustrationIII/",
        apiSubDomain:"https://esuat.allianz.com.tw/service/wsIllustrationIII/"
    },
    {
        apiDomainKey: "wsaz",
        apiDomain: "https://t5.allianz.com.tw/WSAZ/",
        apiSubDomain:"https://esuat.allianz.com.tw/service/WSAZ/"
    },
    {
        apiDomainKey: "MstrPage",
        apiDomain: "https://t1.allianz.com.tw/MSTR/",
        apiSubDomain: "https://esuat.allianz.com.tw/partner/MSTR/"
    },
    {
        apiDomainKey:"w2Util_pp",
        apiDomain:"https://t5.allianz.com.tw/w2Util/",
        apiSubDomain:"https://esuat.allianz.com.tw/service/w2Util/"
    },
    {
        apiDomainKey:"AZPL",
        apiDomain:"https://t1.allianz.com.tw/eProCommonsite/",
        apiSubDomain:"https://esuat.allianz.com.tw/partner/eProCommonsite/"
    },
    {
        apiDomainKey:"w2UtilAPI",
        apiDomain:"https://t5.allianz.com.tw/w2UtilAPI/",
        apiSubDomain:"https://esuat.allianz.com.tw/service/w2UtilAPI/"
    },
    {
        apiDomainKey:"accountManager",
        apiDomain:"https://t1.allianz.com.tw/accountManager/",
        apiSubDomain:"https://esuat.allianz.com.tw/partner/accountManager/"
    }
]);
export const apiConfig_Uat: IApiConfig[] = ([
    {
        apiID: "appLogin",
        keyId: "B718A8D8-6E99-4C55-B3F1-A826FBC0EF4F"
    },
    {
        apiID: "commonLogin",
        keyId: "B718A8D8-6E99-4C55-B3F1-A826FBC0EF4F"
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
        keyId: "2F61976E-4E8D-4DA4-871C-1507FB26D874"
    },
    {
        apiID: "commonVersionCheck",
        keyId: "2F61976E-4E8D-4DA4-871C-1507FB26D874"
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
        apiID:"newForgetPassword",
        keyId:""
    },
    {
        apiID:"newResetPassword",
        keyId:""
    },
    {
        apiID:"newInsPwdToken",
        keyId:"C8837B63-7659-4413-BDED-47DB7B94058F"
    },
    {
        apiID:"maintainData",
        keyId:"1EECE5B6-3A06-4F0D-BF72-FD08762D2B1C"
    },
    {
        apiID:"tokenData",
        keyId:"263E0FE2-8FA7-45AC-AAD7-610D57DAF364"
    }
]);

export const apiDomain_PreProd: IApiDomain[] = ([
    {
        apiDomainKey: "utility",
        apiDomain: 'http://113.196.86.105/wsUtility/',
        apiSubDomain:""
    },
    {
        apiDomainKey: "discover",
        apiDomain: "http://113.196.86.105/wsIllustrationIII/",
        apiSubDomain:""
    },
    {
        apiDomainKey: "wsaz",
        apiDomain: "https://preW2.allianz.com.tw/WSAZ/",
        apiSubDomain:""
    },
    {
        apiDomainKey: "MstrPage",
        // apiDomain: "http://113.196.86.102/WSAZ/"
        apiDomain: "https://preW2.allianz.com.tw/MSTR/",
        apiSubDomain:""
    },

    {
        apiDomainKey:"w2Util_pp",
        apiDomain:"https://preW2.allianz.com.tw/w2Util/",
        apiSubDomain:""
    },
    {
        apiDomainKey:"AZPL",
        apiDomain:"https://preW2.allianz.com.tw/eProCommonsite/",
        apiSubDomain:""
    },
    {
        apiDomainKey:"w2UtilAPI",
        //apiDomain:"http://t5.allianz.com.tw/w2UtilAPI/"
        apiDomain:"https://preW2.allianz.com.tw/w2UtilAPI/",
        apiSubDomain:""
    },
    {
        apiDomainKey:"accountManager",
        apiDomain:"https://preFirst2.allianz.com.tw/accountManager/",
        apiSubDomain:""
    }
]);

export const apiConfig_PreProd: IApiConfig[] = ([
    {
        apiID: "appLogin",
        keyId: "B68DFBB5-4509-4FC4-89D9-6CE4AA713756"
    },
    {
        apiID: "commonLogin",
        keyId: "B68DFBB5-4509-4FC4-89D9-6CE4AA713756"
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
        keyId: "0D06003A-7FAA-4A78-9F0C-D58F2349AED3"
    },
    {
        apiID: "commonVersionCheck",
        keyId: "0D06003A-7FAA-4A78-9F0C-D58F2349AED3"
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
        apiID:"newForgetPassword",
        keyId:""
    },
    {
        apiID:"newResetPassword",
        keyId:""
    },
    {
        apiID:"newInsPwdToken",
        keyId:"43F59B44-6363-4B79-AB53-F71275B0958A"
    },
    {
        apiID:"maintainData",
        keyId:"5B98F6AD-5E60-4965-B9F1-5423C7275AAD"
    },
    {
        apiID:"tokenData",
        keyId:"DAB87AF7-E85D-475D-B637-F1CF4873DFE2"
    }
]);

export const apiDomain_Prod: IApiDomain[] = ([
    {
        apiDomainKey: "utility",
        apiDomain: "https://first2.allianz.com.tw/wsUtility/",
        apiSubDomain: "https://es.allianz.com.tw/service/wsUtility/"
    },
    {
        apiDomainKey: "discover",
        apiDomain: "https://first2.allianz.com.tw/wsIllustrationIII/",
        apiSubDomain:"https://es.allianz.com.tw/service/wsIllustrationIII/"
    },
    {
        apiDomainKey: "wsaz",
        apiDomain: "https://w2.allianz.com.tw/WSAZ/",
        apiSubDomain:"https://es.allianz.com.tw/service/WSAZ/"
    },
    {
        apiDomainKey: "MstrPage",
        apiDomain: "https://w2.allianz.com.tw/MSTR/",
        apiSubDomain: "https://es.allianz.com.tw/partner/MSTR/"
    },
    {
        apiDomainKey:"w2Util_pp",
        apiDomain:"https://w2.allianz.com.tw/w2Util/",
        apiSubDomain:"https://es.allianz.com.tw/service/w2Util/"
    },
    {
        apiDomainKey:"AZPL",
        apiDomain:"https://www.azpl.com.tw/eProCommonsite/",
        apiSubDomain:"https://es.allianz.com.tw/partner/eProCommonsite/"
    },
    {
        apiDomainKey:"w2UtilAPI",
        apiDomain:"https://w2.allianz.com.tw/w2UtilAPI/",
        apiSubDomain:"https://es.allianz.com.tw/service/w2UtilAPI/"
    },
    {
        apiDomainKey:"accountManager",
        apiDomain:"https://first2.allianz.com.tw/accountManager/",
        apiSubDomain:"https://es.allianz.com.tw/partner/accountManager/"
    }
]);
export const apiConfig_Prod: IApiConfig[] = ([
    {
        apiID: "appLogin",
        keyId: "C27A0301-9162-4DD2-9196-8BB9DB971DE0"
    },
    {
        apiID: "commonLogin",
        keyId: "C27A0301-9162-4DD2-9196-8BB9DB971DE0"
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
        keyId: "F8D2555D-89F3-44AE-95FD-633A73FC56E2"
    },
    {
        apiID: "commonVersionCheck",
        keyId: "F8D2555D-89F3-44AE-95FD-633A73FC56E2"
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
        apiID:"newForgetPassword",
        keyId:""
    },
    {
        apiID:"newResetPassword",
        keyId:""
    },
    {
        apiID:"newInsPwdToken",
        keyId:"2721CDA3-DB17-42B9-8F2F-D1FE9FFD5963"
    },
    {
        apiID:"maintainData",
        keyId:"6EF77201-21A7-46DF-926A-825737DF6608"
    },
    {
        apiID:"tokenData",
        keyId:"14B7C122-2212-4F23-A62E-5DBBD7673A43"
    }
]);