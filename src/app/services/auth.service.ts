import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;
  private authSecretKey = 'Bearer Token';

  constructor() { 
    this.isAuthenticated = !!localStorage.getItem(this.authSecretKey);
  }
  
  login(): boolean {
    localStorage.setItem('Bearer Token','anything');
    this.isAuthenticated = true;
    return true;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  logout(): void {
    localStorage.removeItem(this.authSecretKey);
    this.isAuthenticated = false;
  }
}