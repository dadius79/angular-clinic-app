import { Injectable } from '@angular/core';
import { Menu } from './menu';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './../authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MenuserviceService {

  private endpoint = 'http://127.0.0.1:8000/api/admin';

  constructor(private http: HttpClient, private authService: AuthService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' +  this.authService.getToken()
    })
  }

  //menuData = [];

  /** @getMenu(): Observable<Menu[]> {
    let api = `${this.endpoint}/menu`;
    return this.http.get<Menu[]>(api, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  } */

  getMenu(): Observable<any> {
    let api = `${this.endpoint}/menu`;
    return this.http.get<any>(api, this.httpOptions).pipe(
      map((menuData: any) => {
        return menuData.data;
      }), 
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
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
