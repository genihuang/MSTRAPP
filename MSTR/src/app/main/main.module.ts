import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScrollingModule} from '@angular/cdk/scrolling';

//allianz
import * as path from '@allianz/ngx-ndbx';
import{NxGridModule} from '@allianz/ngx-ndbx/grid';
import {NxIconModule } from '@allianz/ngx-ndbx/icon';
import {NxMenuModule} from '@allianz/ngx-ndbx/menu';
import {NxSidebarModule} from '@allianz/ngx-ndbx/sidebar';
import {NxActionModule} from '@allianz/ngx-ndbx/action';
import {NxTreeModule} from '@allianz/ngx-ndbx/tree';
import {NxTabsModule} from '@allianz/ngx-ndbx/tabs';
import { NxExpertModule } from '@allianz/ngx-ndbx/config';

import { MainRoutingModule } from './main-routing.module';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { MainComponent } from './main.component';


@NgModule({
  declarations: [MenuComponent, ContentComponent, MainComponent],
  imports: [
    CommonModule,
    path.NxButtonModule,
    ScrollingModule,
    NxGridModule,
    NxIconModule,
    NxMenuModule,
    NxTreeModule,
    NxTabsModule,
    NxSidebarModule,
    NxActionModule,
    NxExpertModule,
    MainRoutingModule
  ]
})
export class MainModule { }
