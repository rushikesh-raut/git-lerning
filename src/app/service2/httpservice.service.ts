
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  hedersa = new HttpHeaders().set('atoruzation','475h475yhghf47r8474f')
                             .set('content-type','aaplication/json')
  constructor(private http : HttpClient) { }

getuser(){
  return this.http.get('http://localhost:3000/users,',{'headers':this.hedersa})
  }
  
}

