import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor() { }
  user=[{
    email:'@Aashu.com',
    Password:'12345'
  }]

  h1(){
    return this.user
  }
}
