import { Component, OnInit } from '@angular/core';

import { Admin } from 'src/app/interfaces/admin';
import { Visit } from 'src/app/interfaces/visit';
import { AdminService } from 'src/app/services/admin/admin.service';
import { AuthService } from 'src/app/authentication/auth.service';

import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-visit',
  templateUrl: './add-visit.component.html',
  styleUrls: ['./add-visit.component.css']
})
export class AddVisitComponent implements OnInit {

  createVisitForm: FormGroup;
  admins: any[] = [];
  visit!: Visit;

  constructor(
    private adminService: AdminService,
    private router: Router,
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private authService: AuthService
  ) { 
    this.createVisitForm = this.fb.group({
      patient_id: [''],
      consultation: [''],
      doctor_id: [''],
      over_the_counter: [''],
      status: ['Pending'],
      created_by: ['']
    })
  }

  ngOnInit(): void {
    this.getAdminByRole();
  }

  getPatientId(): number{
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    return id;
  }

  getAdminByRole(): void{
    this.adminService.getAdminByRole(3).subscribe(
      admins => {
        this.admins = admins;
        this.fillHiddenInput();
        console.log(admins);
      }
    );
  }

  addVisit(){
    console.log("Form Submitted");
    console.log(this.createVisitForm.value);
  }

  fillHiddenInput(){
    const current_patient_id = this.getPatientId();
    const current_user_id = this.authService.getUserId();
    this.createVisitForm.patchValue(
      {
        patient_id: current_patient_id,
        created_by: current_user_id
      }
    )
  }

}
