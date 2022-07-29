import { Component, OnInit } from '@angular/core';

import { Visit } from 'src/app/interfaces/visit';
import { VisitService } from 'src/app/services/visits/visit.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrls: ['./visits.component.css']
})
export class VisitsComponent implements OnInit {

  visits: any[] = [];
  
  constructor(
    private visitService: VisitService
  ) { }

  ngOnInit(): void {
    this.getVisits();
  }

  getVisits(): void{
    this.visitService.getVisits().subscribe(
      visits => {
        this.visits = visits;
        console.log(visits);
      });
  }

}
