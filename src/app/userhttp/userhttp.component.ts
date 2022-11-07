import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpserviceService } from '../service2/httpservice.service';

@Component({
  selector: 'app-userhttp',
  templateUrl: './userhttp.component.html',
  styleUrls: ['./userhttp.component.scss']
})
export class UserhttpComponent implements OnInit {

  constructor(private userservice : HttpserviceService) { }
  ngOnInit(): void {
    this.getinfo();
  }

  getinfo(){
    this.userservice.getuser().subscribe(value => {console.log('user deta get ='+value)})
  }
}
