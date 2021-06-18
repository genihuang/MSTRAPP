
import * as commonData from './common';
export interface MaintainData{
    Format?:string;
}
export interface reqMaintain {
    pi_CommonData?:commonData.reqCommon;
    pi_GetMaintainData?:MaintainData;
}

export interface resMaintain {
    po_GetMaintainData?:maintainDataDetail;
}
export interface maintainDataDetail extends commonData.resCommonAPI
{
    MaintainData:maintainDataTemplate;
}

export interface maintainDataTemplate extends commonData.resCommonAPI
{

    IsMaintaining?:string;
    MaintainPeriodNow?:maintainPeriod[];
    MaintainPeriods?:maintainPeriod[];

}
export interface maintainPeriod{
    Begin?:string;
    End?:string;
}