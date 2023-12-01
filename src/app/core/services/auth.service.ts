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


  constructor(private _http:HttpClient) { }

  login(
    authRequest: AuthenticationRequest
  ) {
    return this._http.post<AuthenticationResponse>
    (this.URL, authRequest);
  }
}
