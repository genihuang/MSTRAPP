import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MainComponent} from './main.component';
import {ContentComponent} from './content/content.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponent,
    children:[
      {
        path:':code',
        component:ContentComponent
      },
      {
        path:'',
        component:ContentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
