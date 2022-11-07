import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first1',
  templateUrl: './first1.component.html',
  styleUrls: ['./first1.component.scss']
})
export class First1Component implements OnInit {
massage='hello from the interpolation'
result :any

go:any

atm=false

  constructor() { } 
  student={
 name:'rushi',
 address:'virul'
 
  }
  buttoncolor:any
  no=0


  ngOnInit(): void {
    // this.sum()
   }
  sum (){
    let a=6
    let b = 6 
    this.result=a*b
  }
  logic(){
    this.go='click button'
  }
  toggle(){
    this.buttoncolor=` background-color:yellow;
  margin : 10px;
  padding:20px;
  border:4px solid black;`

    this.atm = ! this.atm
  }
  // buttoncolor=` background-color:yellow;
  // margin : 10px;
  // padding:20px;
  // border:4px solid black;`
h1(p:string){
p==='a'? this.no++:this.no--

}

}
