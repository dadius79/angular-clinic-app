import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from 'src/app/authentication/auth.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Admin } from 'src/app/interfaces/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

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

  getAdminByRole(id: number): Observable<any> {
    let api = `${this.endpoint}/admins/role-admins/${id}`;
    return this.http.get<any>(api, this.httpOptions).pipe(
      map((admins: any) => {
        return admins.data;
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
