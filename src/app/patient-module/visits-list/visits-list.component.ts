import { Component, OnInit } from '@angular/core';

import { Visit } from 'src/app/interfaces/visit';
import { PatientService } from 'src/app/services/patients/patient.service';

import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-visits-list',
  templateUrl: './visits-list.component.html',
  styleUrls: ['./visits-list.component.css']
})
export class VisitsListComponent implements OnInit {

  visits: any[] = [];
  patientId = this.getPatientId();
  
  constructor(
    private patientService: PatientService,
    private router: Router,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getPatientVisits();
  }

  getPatientId(): number{
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    return id;
  }

  getPatientVisits(): void{
    const id = this.getPatientId();
    this.patientService.getPatientVisits(id).subscribe(
      visits => {
        this.visits = visits;
      });
  }

}
