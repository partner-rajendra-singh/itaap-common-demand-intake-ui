import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {first, map} from 'rxjs/operators';
import {User} from '../models/user';
import {environment} from 'src/environments/environment';
import {AuthenticationResult, InteractionRequiredAuthError, PopupRequest} from '@azure/msal-browser';
import {MsalService} from "@azure/msal-angular";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient,
              private router: Router,
              private msalAuthService: MsalService,
              private messageService: MessageService) {

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

  isAuthenticatedUser(): boolean {
    if (this.currentUserValue) {
      this.currentUserValue.expireTime = new Date(this.currentUserValue.expireTime);
    }
    // return (this.currentUserValue != null && this.currentUserValue.isAuthenticated && new Date().getTime() < this.currentUserValue.expireTime.getTime());
    return true;
  }

  loginPopUp() {
    this
      .msalAuthService
      .loginPopup()
      .subscribe({
        next: (result) => {
          this.getUserDataAndSilentToken();
        },
        error: (error) => {
          console.error(error);
          this.messageService.add({severity: 'error', summary: 'error', detail: 'Login Failed! : ' + error});
        }
      });
  }

  checkAccount() {
    if (this.msalAuthService.instance.getAllAccounts().length > 0) {
      console.log('IF')
      this.getUserDataAndSilentToken();
    } else {
      console.log('ELSE')
      this.loginPopUp();
    }
  }

  getLoggedInAccounts(): Observable<AuthenticationResult> {
    return this.msalAuthService
      .handleRedirectObservable();
  }


  getUserDataAndSilentToken() {
    let popupRequest: PopupRequest = {
      scopes: ['https://graph.microsoft.com/.default'],
      account: this.msalAuthService.instance.getAllAccounts()[0]
    };
    this
      .msalAuthService
      .instance
      .acquireTokenSilent(popupRequest)
      .then(response => {
        console.log(response);
        this.populateResponse(response);
      })
      .catch(error => {
        console.log('getUserDataAndSilentToken():', error);
        if (error instanceof InteractionRequiredAuthError) {
          this.msalAuthService.instance
            .acquireTokenPopup(popupRequest)
            .then(response => {
              console.log(response);
              this.populateResponse(response);
            });
        }
      });
  }

  populateResponse(response: AuthenticationResult) {
    this
      .ssoLogin(response)
      .pipe(first())
      .subscribe(
        data => {
          this.messageService.add({severity: 'success', summary: 'Success', detail: 'Login Successful!'});
          // if (this.authService.isDM() || this.authService.isCCB()) {
          // this.router.navigate(['dashboard']);
          // } else {
          // this.router.navigate(['demand-intake']);
          // }
          this.router.navigate(['dashboard']);
        },
        error => {
          this.messageService.clear('retry');
          this.messageService.add({
            key: 'retry',
            severity: 'error',
            sticky: true,
            summary: error.statusText,
            detail: error.message
          });
        });
  }
}
