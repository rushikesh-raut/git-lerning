import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component implements OnInit {
  constructor(private fb : FormBuilder, private rt: Router) {}
  ngOnInit(): void {}
  profile = this.fb.group({
    name:['',[Validators.required,Validators.maxLength(7),Validators.minLength(4)]],
  email:[]
  })

  hello(){
    alert('login ')
    this.rt.navigateByUrl('hello')
    this.profile.markAllAsTouched()
  }
}