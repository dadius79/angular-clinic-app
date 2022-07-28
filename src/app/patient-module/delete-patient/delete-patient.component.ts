import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Patient } from 'src/app/interfaces/patient';
import { PatientService } from 'src/app/services/patients/patient.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-patient',
  templateUrl: './delete-patient.component.html',
  styleUrls: ['./delete-patient.component.css']
})
export class DeletePatientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
