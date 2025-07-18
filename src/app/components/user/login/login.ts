import { Component } from '@angular/core';
import {AuthService} from '../../../services/authservice';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  email = '';
  password = '';
  loginFailed = false;
  loading = false;

  constructor(private authService: AuthService, private router: Router) {
  }


  onLogin() {
    this.loading = true;
    this.authService.login(this.email, this.password).subscribe(success => {
      this.loading = false;

      if (success) {
        this.router.navigate(['/week-view']);
      } else {
        this.loginFailed = true;
      }
    });
  }
}
