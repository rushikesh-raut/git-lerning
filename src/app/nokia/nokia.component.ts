import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nokia',
  templateUrl: './nokia.component.html',
  styleUrls: ['./nokia.component.scss']
})
export class NokiaComponent implements OnInit {

  constructor(private activa : ActivatedRoute) { }
pass:any
away:any
  ngOnInit(): void {
  this.activa.queryParamMap.subscribe((rushi)=>{

   this.pass=rushi.get('data') 

   console.log(this.pass)

   this.away=JSON.parse(this.pass)

   console.log(this.away)
  })
  }

}
