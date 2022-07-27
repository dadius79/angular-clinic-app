import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Form } from '@angular/forms';

import { Patient } from 'src/app/interfaces/patient';
import { PatientService } from 'src/app/services/patients/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {

  patient!: Patient;
  editPatientForm: FormGroup;

  constructor(
    public patientService: PatientService,
    public fb: FormBuilder,
    public router: Router
  ) { 
    this.editPatientForm = this.fb.group({
      name: [''],
      date_of_birth: [''],
      sex: [''],
      national_status: [''],
      national_id: [''],
      address: [''],
      phone_number: [''],
      emergency_number: [''],
      registered_by: ['2']
    })
  }

  ngOnInit(): void {
    this.getPatient();
  }

  getPatient(): void{
    this.patientService.getPatient().subscribe(
      patient => {
        this.patient = patient;
        console.log(patient);
      });
  }

  editPatient(){}

}
