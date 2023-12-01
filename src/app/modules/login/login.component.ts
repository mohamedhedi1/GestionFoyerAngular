import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationRequest } from 'src/app/core/models/AuthentificationRequest';
import { AuthenticationResponse } from 'src/app/core/models/AuthentificationResponse';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage!: string;
  authRequest: AuthenticationRequest = {};
  authResponse: AuthenticationResponse = {};
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  authenticate() {
    console.log(this.authRequest);
    this.authService.login(this.authRequest)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.authResponse = response;
          localStorage.setItem('token', response.access_token as string);
          this.router.navigate(['etudiants']);
        },
        error: (error) => {
          console.error(error);
          this.errorMessage = 'Invalid email or password';
        }
      });
  }

 
}