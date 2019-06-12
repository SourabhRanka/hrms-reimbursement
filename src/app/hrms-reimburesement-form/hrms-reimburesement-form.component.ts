import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { ReimbursementService } from "../service/reimbursement.service";

@Component({
  selector: "app-hrms-reimburesement-form",
  templateUrl: "./hrms-reimburesement-form.component.html",
  styleUrls: ["./hrms-reimburesement-form.component.css"]
})
export class HrmsReimburesementFormComponent implements OnInit {
  todayDate = "";
  // reimburesementForm: any;
  reimburesement_details: FormArray;
  employeeData = '';
  // employeeData = {
  //   managers: [
  //     {
  //       id: 81,
  //       employeeName: "Durgesh Trivedi"
  //     }
  //   ],
  //   accounts: [
  //     {
  //       id: 78,
  //       employeeName: "Prakash Acharya"
  //     },
  //     {
  //       id: 100,
  //       employeeName: "Suryakant Barsode"
  //     },
  //     {
  //       id: 218,
  //       employeeName: "Akshay Kulkarni (Accounts)"
  //     }
  //   ],
  //   hr: [
  //     {
  //       id: 2,
  //       employeeName: "Manasi Paranjape"
  //     },
  //     {
  //       id: 341,
  //       employeeName: "Niraja Bulakh"
  //     },
  //     {
  //       id: 349,
  //       employeeName: "Medha Gokhale"
  //     },
  //     {
  //       id: 408,
  //       employeeName: "Trupti Khatmode"
  //     },
  //     {
  //       id: 476,
  //       employeeName: "Bhagyashree Paranjape"
  //     }
  //   ],
  //   buhead: {
  //     id: 5,
  //     employeeName: "BU-6 (Ashutosh Kumar)"
  //   }
  // };

  reimburesementForm = this.fb.group({
    projectName: [""],
    manager: [""],
    hr: [""],
    reimburesement_details: this.fb.array([
      this.fb.group({
        date: "",
        amount: "",
        description: "",
        fileName: "",
        currency: "",
        clientRecovery: ""
      })
    ])
  });

  constructor(private fb: FormBuilder, private router: Router, 
    private reimbursementService : ReimbursementService) {}

  ngOnInit() {
    let date = new Date();
    this.todayDate =
      date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
    this.reimbursementService
      .getEmployeeData(1)
      .subscribe((response: any) => {
        console.log('data:', response);
        this.employeeData = response;
      });
  }

  get reimburesementDetails() {
    return this.reimburesementForm.get("reimburesement_details") as FormArray;
  }

  addRow = () => {
    this.reimburesementDetails.push(
      this.fb.group({
        date: "",
        amount: "",
        description: "",
        fileName: "",
        currency: ""
      })
    );
  };

  deleteRow = index => {
    this.reimburesementDetails.removeAt(index);
  };

  onCancel = () => {
    this.router.navigateByUrl("/my-reimbursement");
  };

  // onFileSelected(input: any) {
  //   if (this.Validate(input)) {
  //     const file: File = input.files[0];
  //     const reader = new FileReader();
  //     reader.addEventListener("load", (event: any) => {
  //       this.fileName = file;
  //     });
  //     reader.readAsDataURL(file);
  //   }
  // }

  // Validate(oInput) {
  //   if (oInput.type == "file") {
  //     var sFileName = oInput.value;
  //     this.error1 = "";
  //     if (sFileName.length > 0) {
  //       var imgkbytes = Math.round(parseInt(oInput.files[0].size) / 1024);

  //       if (imgkbytes <= 1024) {
  //         var blnValid = false;
  //         for (var j = 0; j < this._validFileExtensions.length; j++) {
  //           var sCurExtension = this._validFileExtensions[j];
  //           if (
  //             sFileName
  //               .substr(
  //                 sFileName.length - sCurExtension.length,
  //                 sCurExtension.length
  //               )
  //               .toLowerCase() == sCurExtension.toLowerCase()
  //           ) {
  //             blnValid = true;
  //             break;
  //           }
  //         }

  //         if (!blnValid) {
  //           //alert("Sorry, " + oInput.files[0].name + " is invalid, allowed extensions are: " + this._validFileExtensions.join(", "));
  //           this.error1 =
  //             "Sorry, " +
  //             oInput.files[0].name +
  //             " is invalid, allowed extensions are: " +
  //             this._validFileExtensions.join(", ");
  //           oInput.value = "";
  //           this.submitted = false;
  //           this.registerForm.controls["fileName"].reset();

  //           return false;
  //         }
  //       } else {
  //         this.error1 = "File size exceed. Please upload max 1MB file.";
  //         this.registerForm.controls["fileName"].reset();

  //         return false;
  //       }
  //     }
  //   }
  //   this.error1 = "";
  //   return true;
  // }
}
