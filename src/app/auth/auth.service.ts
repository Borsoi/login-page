import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  login(username: string, password: string): void {
    localStorage.setItem('isLoggedIn', 'true');
  }

  logout(): void {
    localStorage.setItem('isLoggedIn', 'false');
  }
}
