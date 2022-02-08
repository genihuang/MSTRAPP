import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HttpClient} from '@angular/common/http';
import { DeviceDetectorService,DeviceInfo } from 'ngx-device-detector';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NxModalModule } from '@allianz/ngx-ndbx/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ApiCommonModule} from './service/api-common/api-common.module';
import {AppLoginService} from './service/app-login.service';
import { ModalComponent } from './shared/modal/modal.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { FormBuilder } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    LoadingComponent
  ],
  imports: [
    HttpClientModule,
    ApiCommonModule,
    BrowserModule,
    NxModalModule,
    AppRoutingModule,  
    //FormBuilder,
    //DeviceDetectorService,
    NgbModule
  ],
  providers: [
    DeviceDetectorService,
    AppLoginService
  ],
  entryComponents:[
    ModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
