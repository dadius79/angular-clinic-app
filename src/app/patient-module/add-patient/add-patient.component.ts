import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { PatientService } from 'src/app/services/patients/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  addPatientForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public patientService: PatientService,
    public router: Router
  ) {
    this.addPatientForm = this.fb.group({
      name: [''],
      date_of_birth: [''],
      sex: [''],
      national_status: [''],
      national_id: [''],
      address: [''],
      phone_number: [''],
      emergency_number: [''],
      registered_by: ['1']
    })
  }

  ngOnInit(): void {}

  addPatient() {
    this.patientService.addPatient(this.addPatientForm.value)
  }

}
