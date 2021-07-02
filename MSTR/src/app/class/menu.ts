import { NxTreeFlatDataSource, NxFlatTreeControl, NxTreeNode, NxFlatTreeNode } from '@allianz/ngx-ndbx/tree';
import * as commonData from './common';

export interface reqMenu {
  UKEY?:string;
  WEB_SYSTEM_CODE?:string;
  USER_TYPE?:string;
  USER_ID?:string;
}
export interface resMenu extends commonData.resCommonAPI{
  ReturnResult?:mstrMenu;
}

export interface mstrMenu{
  menu?:MenuNode[];
  object?:ObjectNode[];
}

export interface MenuNode extends NxTreeNode {
  web_function?:string;
  web_func_attribute?:string;
  web_func_display_text?:string;
  web_function_Parent?:string;
  display_order?:number;
  upper_display_order?:number;
  expanded?:boolean;            //change to Menu
  web_menu_display_icon?:string;
  web_menu_display_background?:string;
  web_function_short_name?:string;
  children?:MenuNode[];
  // code: string;
  // name?: string;
  // icon?: string;
  // order?:number;
  // link?:string;
  // children?: MyTreeNode[];
}

export interface ObjectNode extends NxTreeNode{
  web_function?:string;
  web_object?:string;
  web_obj_attribute?:string;
  web_obj_display_text?:string;
  web_obj_display_image?:string;
  web_obj_link_url?:string;
  dashboard_use_mode?:string;
  web_obj_owner?:string;
  display_order?:number;
  expanded?:boolean;          //change to Menu
  children?:ObjectNode[];
}

/** Flat node with expandable and level information */
export interface MyFlatTreeNode extends NxFlatTreeNode {
  web_obj_attribute?:string;
  web_obj_display_text?:string;
  web_obj_display_image?:string;
  web_obj_link_url?:string;
  dashboard_use_mode?:string;
  web_obj_owner?:string;
  display_order?:number;
}