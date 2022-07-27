import { Component, OnInit } from '@angular/core';

import { Patient } from 'src/app/interfaces/patient';
import { PatientService } from 'src/app/services/patients/patient.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {

  patient: Patient[] = [];

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
  }

  getPatient(): void{
    this.patientService.getPatient().subscribe(patient => this.patient = patient);
  }

}
