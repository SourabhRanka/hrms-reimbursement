import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HrmsReimburesementFormComponent } from './hrms-reimburesement-form/hrms-reimburesement-form.component';
import { MyReimburesementsComponent } from './my-reimburesements/my-reimburesements.component';
import { ApprovalScreenComponent } from './approval-screen/approval-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    HrmsReimburesementFormComponent,
    MyReimburesementsComponent,
    ApprovalScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
