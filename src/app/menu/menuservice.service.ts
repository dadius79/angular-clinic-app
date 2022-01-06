import { Injectable } from '@angular/core';
import { Menu } from './menu';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuserviceService {

  constructor(private http: HttpClient) { }

  private menuUrl = 'http://127.0.0.1:8000/api/admin/menu';
}
