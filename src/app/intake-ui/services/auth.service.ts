import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../models/user';
import {environment} from 'src/environments/environment';
import {AuthenticationResult} from '@azure/msal-browser';

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

  getCurrentUserRole(): string {
    if (this.isDM()) {
      return "DEMAND MANAGER";
    } else if (this.isCCB()) {
      return "CCB MEMBER";
    } else if (this.isAdmin()) {
      return "ADMIN";
    }

    return "REQUESTER";
  }

  login(email: string, token: string) {
    let url = this.baseUrl + '/common/demand-intake/login/';
    let headerOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Correlation-ID': 'abc'
      })
    };

    return this.http.post<any>(url, {email, token}, headerOptions)
      .pipe(map(user => {
        console.log("login() Response :", user)
        if (user && user.token && user.isAuthenticated) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          window.location.reload();
        }
        return user;
      }));
  }

  ssoLogin(response: AuthenticationResult) {
    let url = this.baseUrl + '/common/demand-intake/login';

    let headerOptions = {
      headers: new HttpHeaders({
        'X-Correlation-ID': 'abc',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // This allows requests from all domains, adjust as needed
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      }).set('Authorization', `Bearer ${response.accessToken}`)
    };
    return this.http
      .post<any>(url, response, headerOptions)
      .pipe(map(user => {
        console.log("ssoLogin() Response :", user)
        // if (user && user.isAuthenticated) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        // }
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

    return this.http.post<any>(url, {email}, headerOptions)
      .pipe(map(user => {
        console.log("getOTP() Response :", user)
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);

        return user;
      }));

  }

  isAuthenticatedUser(): boolean {
    if (this.currentUserValue) {
      this.currentUserValue.expireTime = new Date(this.currentUserValue.expireTime);
    }
    // return (this.currentUserValue != null && this.currentUserValue.isAuthenticated && new Date().getTime() < this.currentUserValue.expireTime.getTime());
    return true;
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null!);
    window.location.reload();
  }
}
