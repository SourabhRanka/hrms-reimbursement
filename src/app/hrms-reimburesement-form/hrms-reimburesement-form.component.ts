import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { ReimbursementService } from "../service/reimbursement.service";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "app-hrms-reimburesement-form",
  templateUrl: "./hrms-reimburesement-form.component.html",
  styleUrls: ["./hrms-reimburesement-form.component.css"]
})
export class HrmsReimburesementFormComponent implements OnInit {
  todayDate = "";
  // reimburesementForm: any;
  reimbursementDetails: FormArray;
  employeeData = '';
  reimburesementForm = this.fb.group({
    project: [""],
    description: "",
    managerId: [""],
    hrid: [""],
    reimbursementDetails: this.fb.array([
      this.fb.group({
        amount: "",
        clientRecovery: "",
        currency: "",
        description: "",
        documentURL: "abc",
        reimbursementDate: ""
      })
    ])
  });

  constructor(private fb: FormBuilder, private router: Router,
    private reimbursementService: ReimbursementService, private http: HttpClient) { }

  ngOnInit() {
    let date = new Date();
    this.todayDate =
      date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
    this.reimbursementService
      .getEmployeeData(570)
      .subscribe((response: any) => {
        console.log('data:', response);
        this.employeeData = response;
      });
  }

  get reimburesementDetails() {
    return this.reimburesementForm.get("reimbursementDetails") as FormArray;
  }

  addRow = () => {
    this.reimburesementDetails.push(
      this.fb.group({
        amount: "",
        clientRecovery: "",
        currency: "",
        description: "",
        documentURL: "abc",
        reimbursementDate: ""
      })
    );
  };

  deleteRow = index => {
    this.reimburesementDetails.removeAt(index);
  };

  onCancel = () => {
    this.router.navigateByUrl("/my-reimbursement");
  };

  submitReimbursement() {

    let data = this.reimburesementForm.value;
    data.accountsPersonId = 78;
    data.buheadId = this.employeeData['buhead'].id;
    data.employeeNumber = 570;
    data.headHRId = 1;

    this.http.post("http://localhost:9090/v1/reimbursement", data).subscribe(
      data => {
        console.log("POST Request is successful ", data);
      },
      error => {
        console.log("Error", error);
      }
    );
  }
}
