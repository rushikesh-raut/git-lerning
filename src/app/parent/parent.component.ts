import { Component, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
bb:any
cc:any

  constructor() { }
  h1 = [{
    name :'rushi',
    lname : 'raut',
    clg:'hvpm',
  },{
    name :'gaurav',
    lname : 'pqr',
    clg :'xyz',
  },{
    name :'ravi',
    lname : 'raut',
    clg :'abc',
  }]

  ngOnInit(): void {
  }
  aa(rr:any){
this.bb=rr
  }
  total :any
  hello(event:any){
    this.total=event
  }
 
}