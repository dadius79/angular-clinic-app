import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PatientService } from 'src/app/services/patients/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  //addPatientForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public patientService: PatientService,
    public router: Router
  ) {}

  addPatientForm = this.fb.group({
    name: [''],
    date_of_birth: [''],
    sex: ['Male'],
    national_status: ['Kenyan'],
    national_id: [''],
    address: [''],
    phone_number: [''],
    emergency_number: [''],
    registered_by: ['1']
  });

  ngOnInit(): void {
    //this.addPatient();
    //console.log("Add Patient Working");
  }

  addPatient() {
    this.patientService.addPatient(this.addPatientForm.value)
  }

}
