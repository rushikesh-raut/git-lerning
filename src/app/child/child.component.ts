import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }
@Input() h2: any
abc:any
@Output() rushi = new EventEmitter<any>();

ngOnInit(): void {
//  let jay = [{
//   name:'akshay',
//   lname:'raut',
//   city:'pune'
//  },{
//   name:'sunil',
//   lname:'raut',
//   city :'mumbai'
//  },{
//   name:'rahul',
//   lname:'raut',
//   city:'nagpur'
//  }]
//  this.rushi.emit(jay)
}
  add(){
   this.abc= this.h2

  }
  jio(){
    let jay = [{
      name:'akshay',
      lname:'raut',
      city:'pune'
     },{
      name:'sunil',
      lname:'raut',
      city :'mumbai'
     },{
      name:'rahul',
      lname:'raut',
      city:'nagpur'
     }]
     this.rushi.emit(jay)
    }
  }

