import { Component, OnInit } from '@angular/core';
import { TimeoutError } from 'rxjs';

@Component({
  selector: 'app-local2',
  templateUrl: './local2.component.html',
  styleUrls: ['./local2.component.scss']
})
export class Local2Component implements OnInit {

  constructor() { }
  attribute:any
  arr:any

student='hello fron intrepolation'
style:any
  disk:any
  h1 = '../assets/h2.webp'

  h2=false
  h3=true

  ngOnInit(): void {
  this.setcss()
  this.inline()
  this.set()
  }
  setcss(){
    this.attribute={
      morning:false,
      evening:true,
      highliter:true

    }
  }

  inline(){
    this.arr={
      rushi:false,
      highliter:true,
      prafull:true
    }
  }
  hello(){
  this.disk=this.student
  }

abc(){
  this.arr={
    rushi:false,
    highliter:true,
    prafull:true
  }
}
hell(){
  this.arr=true
}
set(){
  this.style={
    'border':this.h3 ? '5px solid black':'2px solid black'
  }
}
a=10
b=5
h10:any
result:any
h11(add1:any){
  this.h10=add1
 if(this.h10 == 'add'){
 this.result = this.a + this.b
 }
if(this.h10 == 'mul'){
  this.result = this.a * this.b
  }
  if(this.h10 == 'div'){
    this.result = this.a / this.b
    }
    if(this.h10 == 'sub'){
      this.result = this.a + this.b
      } 
 }
}
