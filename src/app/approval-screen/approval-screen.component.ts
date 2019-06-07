import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-approval-screen',
  templateUrl: './approval-screen.component.html',
  styleUrls: ['./approval-screen.component.css']
})
export class ApprovalScreenComponent implements OnInit {

  myArray = [];
  todayDate = '';

  balanceAmountsForm = this.fb.group({
    notReimburesableAmount : [''],
    balance : [''],
    advanceAmount: [''],
    balanceAmount: ['']
  });

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.myArray = [1,2,3];
    let date = new Date();
    this.todayDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();
  }

  onCancel = () => {
    this.router.navigateByUrl('/my-reimbursement');
  }

}
