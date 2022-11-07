import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './GURD/auth.guard';
import { JioComponent } from './jio/jio.component';
import { LoginComponent } from './login/login.component';
import { Form1Component } from './my1/form1/form1.component';
import { Local2Component } from './my1/local2/local2.component';
import { My1Module } from './my1/my1.module';
import { NokiaComponent } from './nokia/nokia.component';
import { UserhttpComponent } from './userhttp/userhttp.component';

const routes: Routes = [{
  path:'hello',component:Local2Component

},

{

  path:'login',component:LoginComponent,

},

{
  path:'form1',component:Form1Component},

 {
   path:'',redirectTo:'form1',pathMatch:'full'
},
{
path : 'http',component:UserhttpComponent
},


{
  path:'jio',component:JioComponent,canActivate:[AuthGuard],
  children:[{
    path:'nokia',component:NokiaComponent
  }]
},
//   {
//    path:'nokia',component:NokiaComponent
//  }
{path:'my1',loadChildren:()=> import('./my1/my1.module').then(el => My1Module)},
// {path:'**',component:NokiaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
