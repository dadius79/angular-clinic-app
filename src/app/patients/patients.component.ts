import { Component, OnInit } from '@angular/core';

import { Patient } from './patient';
import { PatientService } from './patient.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  patient: Patient[] = [];

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.getPatient();
  }

  getPatient(): void {
    this.patientService.getPatients().subscribe(patient => this.patient = patient);
  }

}
