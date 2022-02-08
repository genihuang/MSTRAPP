import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import * as formfield from '@allianz/ngx-ndbx/formfield';
import {NxMessageModule} from '@allianz/ngx-ndbx/message';
import {ERROR_DEFAULT_OPTIONS,ErrorDefaultOptions} from '@allianz/ngx-ndbx/base';
import {NxInputModule, NxInputDirective} from '@allianz/ngx-ndbx/input';

import { TwofactorauthRoutingModule } from './twofactorauth-routing.module';
import { TwofactorauthComponent } from './twofactorauth.component';
import { NxButtonModule } from '@allianz/ngx-ndbx';

@NgModule({
  declarations: [TwofactorauthComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,  
    TwofactorauthRoutingModule,
    NxInputModule,
    formfield.NxFormfieldModule,
    NxMessageModule,
    NxButtonModule
  ]
})
export class TwofactorauthModule { }
