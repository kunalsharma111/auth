import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
    private router: Router) { }

  userregister(data) {
    return this.http.post(`${environment.apiBaseUrl}/user/create-user`, data);
  }
  userLogin(data) {
    return this.http.post(`${environment.apiBaseUrl}/user/login`, data);
  }
  getAllUsers() {
    return this.http.get(`${environment.apiBaseUrl}/user/get-all-users`);
  }
  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/');
  }

}
