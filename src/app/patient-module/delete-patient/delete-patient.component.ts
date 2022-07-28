import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Patient } from 'src/app/interfaces/patient';
import { PatientService } from 'src/app/services/patients/patient.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delete-patient',
  templateUrl: './delete-patient.component.html',
  styleUrls: ['./delete-patient.component.css']
})
export class DeletePatientComponent implements OnInit {

  patient!: Patient;
  deletePatientForm: FormGroup;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private patientService: PatientService,
    private router: Router,
    private location: Location
  ) { 
    this.deletePatientForm = this.fb.group({
      confirmation: ['']
    })
  }

  ngOnInit(): void {
    this.getPatient();
  }

  getPatientId(): number{
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    return id;
  }

  getPatient(): void{
    const id = this.getPatientId();
    this.patientService.getPatient(id).subscribe(
      patient => {
        this.patient = patient;
      });
  }

  deletePatient(data: any){
    if(data.confirmation == 'Yes'){
      const id = this.getPatientId();
      this.patientService.deletePatient(id);
    }else{
      this.location.back();
    }
  }

}
