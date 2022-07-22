import { Component, OnInit } from '@angular/core';

import { Patient } from 'src/app/interfaces/patient';
import { PatientService } from 'src/app/services/patients/patient.service';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})
export class ListPatientsComponent implements OnInit {

  patient: Patient[] = [];

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.getPatient();
  }

  getPatient(): void {
    this.patientService.getPatients().subscribe(patient => this.patient = patient);
  }

}
