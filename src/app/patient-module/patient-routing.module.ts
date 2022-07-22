import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Router, RouterModule, Routes } from '@angular/router';

import { ListPatientsComponent } from './list-patients/list-patients.component';
import { AddPatientComponent } from './add-patient/add-patient.component';

import { AuthGuard } from '../authentication/auth.guard';

const routes: Routes = [
  {path: 'patients', component: ListPatientsComponent, canActivate: [AuthGuard] },
  {path: 'add-patient', component: AddPatientComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
