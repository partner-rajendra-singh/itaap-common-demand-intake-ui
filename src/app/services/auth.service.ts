import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {

    const userJson = localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<User>(userJson !== null ? JSON.parse(userJson) : null);
    this.currentUser = this.currentUserSubject.asObservable();

    console.log("AuthService : this.currentUser", this.currentUserValue);
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  isDM(): boolean {
    return this.currentUserValue.role == "DEMAND_MANAGER";
  }

  isRequester(): boolean {
    return this.currentUserValue.role == "REQUESTER";
  }

  isCCB(): boolean {
    return this.currentUserValue.role == "CCB_MEMBER";
  }

  isAdmin(): boolean {
    return this.currentUserValue.isAdmin;
  }

  login(email: string, token: string) {
    let url = this.baseUrl + '/common/demand-intake/login/';
    let headerOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Correlation-ID': 'abc'
      })
    };

    return this.http.post<any>(url, { email, token }, headerOptions)
      .pipe(map(user => {
        console.log("login() Response :", user)
        // user.role = 'DEMAND_MANAGER';
        if (user && user.token && user.isAuthenticated) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
        return user;
      }));
  }

  getOTP(email: string) {

    let url = this.baseUrl + '/common/demand-intake/otp/';
    console.log("url : ", this.baseUrl)
    let headerOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Correlation-ID': 'abc'
      })
    };

    return this.http.post<any>(url, { email }, headerOptions)
      .pipe(map(user => {
        console.log("getOTP() Response :", user)


        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);

        return user;
      }));

  }

  isAuthenticatedUser(): boolean {
    return (this.currentUserValue != null && this.currentUserValue.isAuthenticated);
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null!);
    window.location.reload();
  }
}