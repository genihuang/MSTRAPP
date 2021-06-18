import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import * as formfield from '@allianz/ngx-ndbx/formfield';
import {NxMessageModule} from '@allianz/ngx-ndbx/message';
import {ERROR_DEFAULT_OPTIONS,ErrorDefaultOptions} from '@allianz/ngx-ndbx/base';
import {NxInputModule, NxInputDirective} from '@allianz/ngx-ndbx/input';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { NxButtonModule } from '@allianz/ngx-ndbx';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,  
    LoginRoutingModule,
    NxInputModule,
    formfield.NxFormfieldModule,
    NxMessageModule,
    NxButtonModule
  ]
})
export class LoginModule { }
