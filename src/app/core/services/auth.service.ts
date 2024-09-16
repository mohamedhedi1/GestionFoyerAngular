import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationRequest } from '../models/AuthentificationRequest';
import { AuthenticationResponse } from '../models/AuthentificationResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL = 'http://localhost:9090/authenticate/login'
  roleAs: any;


  constructor(private _http:HttpClient) { }

  login(
    authRequest: AuthenticationRequest
  ) {
    return this._http.post<AuthenticationResponse>
    (this.URL, authRequest);
  }

  _is_logged(): boolean {
    return !!localStorage.getItem('token');
}

getRole(role:String) {
  const user =JSON.parse(localStorage.getItem('user')!);
  this.roleAs = user.role;
    if(this.roleAs==role)
      return true;
    return false
 }
 
}
