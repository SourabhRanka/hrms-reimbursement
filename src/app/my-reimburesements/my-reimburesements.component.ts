import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-reimburesements',
  templateUrl: './my-reimburesements.component.html',
  styleUrls: ['./my-reimburesements.component.css']
})
export class MyReimburesementsComponent implements OnInit {

  myArray : any;
  
  adminDetails = '';
  token = '';

  constructor(private router: Router,  private http: HttpClient) { }

  ngOnInit() {
    // let token = (function(a) {
    // return a[0].substr(6,a[0].length);
    // })(window.location.search.substr(1).split('&'));
    // console.log(token);

    let token = 'U2FsdGVkX1+qGUoLs2an27+PBrgFH/QwlQ/cRM2JVRq/ZEZZjQs+ww/W+m3s/CJIB/6iX4N7tByUxTTIaPDB04yVF/lMsc3JggpmPrmuT3OL2FAtdSDS/4jjqbgI0f/PRsBvxvjRc6v+rOccA/gxxjDn2n3PC3NvnZzrSI7FaA4=';
    if (token != "" || token != null) {
      token = decodeURIComponent(token);
      token = token.split(' ').join('+');
      let decodedToken = this.getcryptoResponce(token);
      this.adminDetails = JSON.parse(decodedToken);
      console.log(this.adminDetails);
    }

    this.http.get("http://localhost:9090/v1/reimbursement/570").subscribe(
      data => {
        this.myArray = data;
      },
      error => {
        console.log("Error", error);
      }
    );
    
  }


  getcryptoResponce = (token) => {
    let decryptedToken = CryptoJS.AES.decrypt(token, "PcmQzlQOE90R2o5L0ZKelk0TmtNb1pvTkxWakMwOE9CLzczbz0MyR");
    return decryptedToken.toString(CryptoJS.enc.Utf8);
  }

}
