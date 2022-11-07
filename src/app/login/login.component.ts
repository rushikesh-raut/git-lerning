import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { JobService } from '../SERVICE/job.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder , private servi : JobService) { }
a = 'cautom pipe '
  ngOnInit(): void {
  }
  
form = this.fb.group({
  email:[''],
  password : ['']
})

submit(){
  let one = this.form.value.email
  let two = this.form.value.password
  let three = this.servi.h1().filter((ab:any)=>{
if (ab.email == one && ab.Password == two)return ab 
  })
  if(three.length == 1){
     sessionStorage.setItem('active','yes')
    alert('login succesfull..')
  }else if (three == undefined || three == null || three.length == 0 ){
     sessionStorage.setItem('active','no')
  alert('invalid user...')
  }
}
}
