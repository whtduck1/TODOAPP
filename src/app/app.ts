import { Component } from '@angular/core';
import {AuthService} from './services/authservice';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected title = 'todoapp';
}
