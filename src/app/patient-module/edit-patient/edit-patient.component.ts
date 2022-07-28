import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Form } from '@angular/forms';

import { Patient } from 'src/app/interfaces/patient';
import { PatientService } from 'src/app/services/patients/patient.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {

  patient!: Patient;
  editPatientForm: FormGroup;

  constructor(
    private patientService: PatientService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
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
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.patientService.getPatient(id).subscribe(
      patient => {
        this.patient = patient;
        this.fillEditPatientForm();
      });
  }

  editPatient(){
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.patientService.editPatient(this.editPatientForm.value, id);
  }

  fillEditPatientForm(){
    this.editPatientForm.patchValue(
      {
        name:  this.patient.name,
        sex: this.patient.sex,
        date_of_birth: this.patient.date_of_birth,
        national_status: this.patient.national_status,
        address: this.patient.address,
        national_id : this.patient.national_id,
        phone_number: this.patient.phone_number,
        emergency_number: this.patient.emergency_number
      }
    )
  }

}
