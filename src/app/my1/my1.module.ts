import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { My1RoutingModule } from './my1-routing.module';
import { Local2Component } from './local2/local2.component';
import { Form1Component } from './form1/form1.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Local2Component,
    Form1Component,
  ],
  imports: [
    CommonModule,
    My1RoutingModule,
    ReactiveFormsModule
  ],
  exports:[Local2Component,Form1Component]
})
export class My1Module { }
