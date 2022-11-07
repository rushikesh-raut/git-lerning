import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Form1Component } from './form1/form1.component';
import { Local2Component } from './local2/local2.component';

const routes: Routes = [{
  path:'local2',component:Local2Component,
  children:[{
    path:'form1', component:Form1Component
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class My1RoutingModule { }
