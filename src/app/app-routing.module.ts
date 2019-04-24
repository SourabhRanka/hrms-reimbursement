import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HrmsReimburesementFormComponent} from './hrms-reimburesement-form/hrms-reimburesement-form.component';
import {MyReimburesementsComponent} from './my-reimburesements/my-reimburesements.component';
import {ApprovalScreenComponent} from './approval-screen/approval-screen.component';

const routes: Routes = [
  { path: 'reimburesement-form', component: HrmsReimburesementFormComponent },
  { path: 'my-reimburesement', component: MyReimburesementsComponent },
  { path: 'approval', component: ApprovalScreenComponent },
  { path: '',
    redirectTo: '/my-reimburesement',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
