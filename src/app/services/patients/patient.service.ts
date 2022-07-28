import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './../../authentication/auth.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Patient } from 'src/app/interfaces/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  endpoint: String = environment.apiUrl;
  
  constructor(
    private http: HttpClient, 
    private authService: AuthService,
    public router: Router
    ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authService.getToken()
    })
  }

  getPatients(): Observable<any> {
    let api = `${this.endpoint}/patient/`;
    return this.http.get<any>(api, this.httpOptions).pipe(
      map((patientData: any) => {
        return patientData.data;
      }),
      catchError(this.handleError)
    );
  }

  getPatient(id: number): Observable<any> {
    let api = `${this.endpoint}/patient/find/${id}`;
    return this.http.get<any>(api, this.httpOptions).pipe(
      map((patient: any) => {
        return patient.data;
      }),
      catchError(this.handleError)
    )
  }

  addPatient(patient: Patient){
    let api = `${this.endpoint}/patient/add`;
    return this.http.post<any>(api, patient, this.httpOptions)
    .subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['patients']);
    })
  }

  editPatient(patient: Patient, id: number){
    let api = `${this.endpoint}/patient/edit/${id}`;
    return this.http.put<any>(api, patient, this.httpOptions)
    .subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['patients']);
    })
  }

  deletePatient(id: number){
    let api = `${this.endpoint}/patient/delete/${id}`;
    return this.http.post<any>(api, this.httpOptions)
    .subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['patients']);
    })
  }

  handleError(error: HttpErrorResponse){
    let msg = '';
    if(error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }

}
