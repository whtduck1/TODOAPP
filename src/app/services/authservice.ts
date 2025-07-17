import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of, map, catchError } from 'rxjs';
import { User } from '../components/shared/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/user';
  private currentUserData: User | null = null;


  constructor(private router: Router, private http: HttpClient) {}

  login(email: string, password: string): Observable<boolean> {
    return this.http.get<User[]>(`${this.apiUrl}?email=${email}&password=${password}`).pipe(
      map(users => {
        if (users.length > 0) {
          this.currentUserData = users[0];
          localStorage.setItem('user', JSON.stringify(this.currentUserData));
          return true;
        }
        return false;
      }),
      catchError(() => of(false))
    );
  }

  logout(): void {
    this.currentUserData = null;
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  get isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  get currentUser(): User | null {
    if (!this.currentUserData) {
      const saved = localStorage.getItem('user');
      if (saved) {
        this.currentUserData = JSON.parse(saved);
      }
    }
    return this.currentUserData;
  }

  get userId(): number | null {
    return this.currentUser ? +(`${this.currentUser.id}`) : null;
  }
}
