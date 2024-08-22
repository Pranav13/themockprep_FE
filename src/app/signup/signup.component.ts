import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  signUpWithGoogle() {
    window.location.href = 'http://localhost:8080/oauth2/authorization/google';
  }
}
