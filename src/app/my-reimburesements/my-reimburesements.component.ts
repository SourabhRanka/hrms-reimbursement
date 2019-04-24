import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-reimburesements',
  templateUrl: './my-reimburesements.component.html',
  styleUrls: ['./my-reimburesements.component.css']
})
export class MyReimburesementsComponent implements OnInit {

  myArray = [1,2,3];

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
