import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //endpoint: String = 'http://127.0.0.1:8000/api/admin';

  endpoint: String = environment.apiUrl;
  
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.getToken()
    })
  }
  currentUser = {};

  constructor(
    private http: HttpClient,
    public router: Router
  ) { }

  //Sign-up
  signUp(user: User): Observable<any> {
    let api = `${this.endpoint}/register-user`;
    return this.http.post(api, user)
    .pipe(
      catchError(this.handleError)
    )
  }

  //Sign-in
  signIn(user: User){
    return this.http.post<any>(`${this.endpoint}/login`, user)
    .subscribe((res: any) => {
      localStorage.setItem('access_token', res.data.token)
      localStorage.setItem('user_id', res.data._id)
      this.getUserProfile(res.data._id).subscribe((res) => {
        this.currentUser = res;
        //this.router.navigate(['user-profile/'] + res.data._id); //change to home dashboard
        this.router.navigate(['home']);
      })
    })
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  getUserId() {
    return localStorage.getItem('user_id');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    let removeUserId = localStorage.removeItem('user_id');
     if (removeToken == null && removeUserId == null) {
       this.router.navigate(['log-in']);
     }
  }

  // User profile
  getUserProfile(id: any): Observable<any> {
    let api = `${this.endpoint}/user-profile/${id}`;
    return this.http.get<any>(api, this.httpOptions).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  // Error
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
