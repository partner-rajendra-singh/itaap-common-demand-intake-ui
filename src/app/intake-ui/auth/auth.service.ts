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
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {EventService} from "../services/event.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  baseUrl: string = environment.baseUrl;

  currentLoggedInUser!: AuthenticationResult;
  profilePhoto: SafeUrl | undefined;

  constructor(private http: HttpClient,
              private router: Router,
              private msalAuthService: MsalService,
              private eventService: EventService,
              private sanitizer: DomSanitizer,
              private messageService: MessageService) {

    const userJson = localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<User>(userJson !== null ? JSON.parse(userJson) : null);
    this.currentUser = this.currentUserSubject.asObservable();
    console.log("AuthService : this.currentUser -> ", this.currentUserValue);
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
        'Content-Type': 'application/json',
        'X-Correlation-ID': this.currentLoggedInUser.account.localAccountId + '.' + this.currentLoggedInUser.correlationId,
        'Authorization': `Bearer ${response.accessToken}`
      })
    };
    return this.http
      .post<any>(url, response, headerOptions)
      .pipe(map(user => {
        // console.log("ssoLogin() Response :", user)
        // if (user && user.isAuthenticated) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        // }
        return user;
      }));
  }

  loginPopUp() {
    this
      .msalAuthService
      .loginPopup()
      .subscribe({
        next: (result) => {
          this.getUserDataAndSilentToken();
          this.eventService.progressBarEvent.emit(true);
        },
        error: (error) => {
          console.error(error);
          this.eventService.progressBarEvent.emit(false);
          this.messageService.add({severity: 'error', summary: 'error', detail: 'Login Failed! : ' + error});
        }
      });
  }

  checkAccounts() {
    return this.msalAuthService.instance.getAllAccounts().length > 0
  }

  loginSilently() {
    console.log('checkAccount : Token Received Login in Silently')
    this
      .getHandleRedirect()
      .subscribe({
        next: (result) => {
          // console.log('Redirect Result:', result);
          this.currentLoggedInUser = result;
          this.getUserDataAndSilentToken();
        },
        error: (error) => console.error('Redirect Error:', error)
      })
  }

  getHandleRedirect(): Observable<AuthenticationResult> {
    return this.msalAuthService.handleRedirectObservable();
  }

  getUserDataAndSilentToken() {
    let popupRequest: PopupRequest = {
      scopes: [environment.scope_demand_login],
      account: this.msalAuthService.instance.getAllAccounts()[0]
    };
    this
      .msalAuthService
      .instance
      .acquireTokenSilent(popupRequest)
      .then(response => {
        console.log('getUserDataAndSilentToken() : SUCCESS : ', response.account.username);
        this.populateResponse(response);
      })
      .catch(error => {
        console.log('getUserDataAndSilentToken() : ERROR -> ', error);
        if (error instanceof InteractionRequiredAuthError) {
          this.msalAuthService.instance
            .acquireTokenPopup(popupRequest)
            .then(response => {
              // console.log(response);
              this.populateResponse(response);
            });
        }
      });
  }

  populateResponse(response: AuthenticationResult) {
    this.currentLoggedInUser = response;
    this
      .ssoLogin(response)
      .pipe(first())
      .subscribe(
        data => {
          this.getProfilePhoto();
          this.eventService.progressBarEvent.emit(true);
          this.messageService.add({severity: 'success', summary: 'Success', detail: 'Login Successful!'});
          this.router.navigate(['dashboard']);
          // this.router.navigateByUrl(this.router.url);
        },
        error => {
          this.eventService.progressBarEvent.emit(false);
          this.messageService.clear('retry');
          this.messageService.add({
            key: 'retry',
            severity: 'error',
            sticky: true,
            summary: 'Login Error',
            detail: error.message
          });
        });
  }

  getProfilePhoto() {
    const headers = {
      'Content-Type': 'image/jpeg',
      'Authorization': `Bearer ${this.currentLoggedInUser.accessToken}`
    };
    return this.http.get('https://graph.microsoft.com/v1.0/me/photo/$value', {headers, responseType: 'blob'})
      .subscribe(response => {
          console.log('getProfilePhoto() : SUCCESS -> ', response);
          const url = URL.createObjectURL(response);
          this.profilePhoto = this.sanitizer.bypassSecurityTrustUrl(url);
        },
        error => {
          console.log('getProfilePhoto() : ERROR -> ', error);
        }
      );
  }

  logout(): void {
    localStorage.clear();
    this.currentUserSubject.next(null!);
    this.msalAuthService.instance.clearCache().then(r => {
        console.info("logout() : SUCCESS : Authenticated USER Cache Cleared");
      },
      error => {
        console.info("logout() : ERROR : Authenticated USER Cache Clearing Error -> ", error);
      });
    window.location.reload();
  }
}
