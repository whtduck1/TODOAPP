import { Injectable } from '@angular/core';
import {User} from './user';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {catchError, map, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/user';
  private currUser: User | null = null;
  constructor(private router: Router, private http: HttpClient) { }


  login(email: string, password: string): Observable<boolean> {
    console.log('AuthService.login() wywołany');
    return this.http.get<User[]>(`${this.apiUrl}?email=${email}&password=${password}`).pipe(
      map(users => {
        if (users.length > 0) {
          this.currUser = users[0];
          localStorage.setItem('user', JSON.stringify(this.currUser));
          return true;
        }
        return false;
      }),
      catchError(() => of(false))
    );
  }

  logout(): void {
    this.currUser = null;
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
  isAuthenticated(): boolean {
    return !!localStorage.getItem('user');
  }
  getUser(): User | null {
    return this.currUser || JSON.parse(localStorage.getItem('user') || 'null');
  }
}
