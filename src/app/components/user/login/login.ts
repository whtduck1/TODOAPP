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

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(){
    console.log('Próba logowania:', this.email, this.password);
    this.authService.login(this.email, this.password).subscribe(success => {
      if(success) {
        this.router.navigate(['/todo']);
      }else{
        this.loginFailed = true;
      }
    });
  }
}
