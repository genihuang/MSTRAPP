import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TwofactorauthComponent } from './twofactorauth.component';


const routes: Routes = [
  {
    path:'',
    component:TwofactorauthComponent,
    children:[
      {
        path:':code',
        component:TwofactorauthComponent
      },
      {
        path:'',
        component:TwofactorauthComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TwofactorauthRoutingModule { }
