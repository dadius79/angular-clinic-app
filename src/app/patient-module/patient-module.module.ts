import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../authentication/authconfig.interceptor';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { PatientRoutingModule } from './patient-routing.module';

import { AddPatientComponent } from './add-patient/add-patient.component';
import { ListPatientsComponent } from './list-patients/list-patients.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { DeletePatientComponent } from './delete-patient/delete-patient.component';
import { VisitsListComponent } from './visits-list/visits-list.component';
import { VisitsComponent } from './visits/visits.component';
import { AddVisitComponent } from './add-visit/add-visit.component';
import { EditVisitComponent } from './edit-visit/edit-visit.component';
import { DeleteVisitComponent } from './delete-visit/delete-visit.component';



@NgModule({
  declarations: [
    AddPatientComponent,
    ListPatientsComponent,
    EditPatientComponent,
    DeletePatientComponent,
    VisitsListComponent,
    VisitsComponent,
    AddVisitComponent,
    EditVisitComponent,
    DeleteVisitComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    PatientRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
})
export class PatientModuleModule { }
