import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './../../authentication/auth.service';
import { environment } from 'src/environments/environment';
import { Patient } from 'src/app/interfaces/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  //private endpoint = 'http://127.0.0.1:8000/api/admin';

  endpoint: String = environment.apiUrl;
  
  constructor(private http: HttpClient, private authService: AuthService) { }

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

  addPatient(patient: Patient): Observable<any> {
    let api = `${this.endpoint}/patient/add/`;
    return this.http.post<any>(api, patient, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
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
