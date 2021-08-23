import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules,Params} from '@angular/router';

//constant
import {appPath} from './app-path.const';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path:appPath.login,
    loadChildren:'./login/login.module#LoginModule',
  },
  {
    path:appPath.main,
    loadChildren:'./main/main.module#MainModule'
  },
  {
    path:'',
    redirectTo:appPath.login,
    pathMatch:'full'
  },
  {
    path: '**',
    redirectTo: appPath.login,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true,enableTracing:true})],
  exports: [RouterModule
  ]
})
export class AppRoutingModule { }
