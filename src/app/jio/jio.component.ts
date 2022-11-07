import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jio',
  templateUrl: './jio.component.html',
  styleUrls: ['./jio.component.scss']
})
export class JioComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }
  use =[{
    firstname:'rushi',
    lastname:'raut',
    address:'virul',
    clg:'hvpm'
  },
  {
    firstname:'ravi',
    lastname:'bagade',
    address:'rohana',
    clg:'model'
  },
  {
    firstname:'gaurav',
    lastname:'shinde',
    address:'arvi',
    clg:'vidyabharti'
  }]
  hr:any
hello(xyz:any){
  this.hr=JSON.stringify(xyz)
 this.route.navigate(['jio/nokia'],{queryParams:{data:this.hr}})
 console.log(this.hr)
}
}
