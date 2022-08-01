import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Router, RouterModule, Routes } from '@angular/router';

import { ListPatientsComponent } from './list-patients/list-patients.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { DeletePatientComponent } from './delete-patient/delete-patient.component';
import { VisitsListComponent } from './visits-list/visits-list.component';
import { VisitsComponent } from './visits/visits.component';
import { AddVisitComponent } from './add-visit/add-visit.component';

import { AuthGuard } from '../authentication/auth.guard';

const routes: Routes = [
  {path: 'patients', component: ListPatientsComponent, canActivate: [AuthGuard] },
  {path: 'add-patient', component: AddPatientComponent, canActivate: [AuthGuard] },
  {path: 'edit-patient/:id', component: EditPatientComponent, canActivate: [AuthGuard] },
  {path: 'delete-patient/:id', component: DeletePatientComponent, canActivate: [AuthGuard] },
  {path: 'patient-visits/:id', component: VisitsListComponent, canActivate: [AuthGuard]},
  {path: 'visits', component: VisitsComponent, canActivate: [AuthGuard]},
  {path: 'create-visit/:id', component: AddVisitComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
