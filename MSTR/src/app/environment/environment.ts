import {envConfig,IApiConfig} from '../class/environment';

export const envData:envConfig={
    env :'14',
    systemId:'80',
    systemCode:'MSTR',
    version:'1.0.4',
    platform:'1',//1:IOS,2:Android
    useAcc:'1' //0：舊帳號，1：新帳號
};

export const apiPath : IApiConfig []=([
    {
        apiID: "appLogin",
        domainKey: "utility",
        path: "MSTR/appLogin"
        //path:"Common/login"
    },
    {
        apiID: "commonLogin",
        domainKey: "utility",
        //path: "MSTR/appLogin",
        path:"Common/login"
    },
    {
        apiID: "mstrLogin",
        domainKey: "utility",
        path: "MSTR/mstrLogin",
    },
    {
        apiID: "mstrRestApiLogin",
        domainKey: "utility",
        path: "MSTR/RestApi/mstrLogin",
    },
    {
        apiID:"mstrRestApiPage",
        domainKey:"MstrPage",
        path:"MSTR/MSTR.aspx"

    },
    {
        apiID: "mstrMenu",
        domainKey: "wsaz",
        path: "Main/ProcessReq_V2",
    },
    {
        apiID:"versionCheck",
        domainKey:"discover",
        //domainKey:"utility",
        path:"Common/checkVersion"
    },
    {
        apiID:"commonVersionCheck",
        //domainKey:"discover",
        domainKey:"utility",
        path:"Common/checkVersion"
    },
    {
        apiID:"checkPwdWs",
        domainKey:"w2Util_pp",
        path:"pp.asmx"        
    },
    {
        apiID:"modifyPwdPage",
        domainKey:"AZPL",
        path:"ModifyPwd/modifyPwd.aspx?Mode=U"        
    },
    {
        apiID:"forgetPwdPage",
        domainKey:"AZPL",
        path:"ModifyPwd/modifyPwd.aspx?Mode=Q"        
    },
    {
        apiID:"maintainData",
        domainKey:"w2UtilAPI",
        path:"General/GetMaintainData"
    },
    {
        apiID:"tokenData",
        domainKey:"utility",
        path:"Common/getTokenData"
    }
]);
export const contentSize:number=8;
export const idleTimeout:number=30;