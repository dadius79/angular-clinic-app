import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from 'src/app/authentication/auth.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Visit } from 'src/app/interfaces/visit';

@Injectable({
  providedIn: 'root'
})
export class VisitService {

  endpoint: String = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authService.getToken()
    })
  }

  getVisits(): Observable<any> {
    let api = `${this.endpoint}/visit/`;
    return this.http.get<any>(api, this.httpOptions).pipe(
      map((visits: any) => {
        return visits.data;
      }),
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
