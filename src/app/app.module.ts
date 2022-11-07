import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { First1Component } from './MyComponent/first1/first1.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { My1Module } from './my1/my1.module';
import { EventComponent } from './lifeCycle/event/event.component';
import { Event2Component } from './lifeChild/event2/event2.component';
import { NokiaComponent } from './nokia/nokia.component';
import { JioComponent } from './jio/jio.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UserhttpComponent } from './userhttp/userhttp.component';
import { CaustomPipe } from './caustom.pipe'

@NgModule({
  declarations: [
    AppComponent,
    First1Component,
    ChildComponent,
    ParentComponent,
    EventComponent,
    Event2Component,
    NokiaComponent,
    JioComponent,
    LoginComponent,
    UserhttpComponent,
    CaustomPipe,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    My1Module,
    ReactiveFormsModule,
    HttpClientModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
