import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../services/auth.service';
import { first } from 'rxjs/operators';
import { EventService } from '../../services/event.service';
import { MSAL_GUARD_CONFIG, MsalBroadcastService, MsalGuardConfiguration, MsalService } from '@azure/msal-angular';
import { AuthenticationResult, InteractionRequiredAuthError, PopupRequest } from '@azure/msal-browser';
import { HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  title = 'itaap-demand-intake-ui';
  email !: string;
  token !: string;
  otpSent: boolean = false;

  constructor(public eventService: EventService, private router: Router, private messageService: MessageService, private authService: AuthService,
    private msalAuthService: MsalService, @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private msalBroadcastService: MsalBroadcastService
  ) {
  }

  ngOnInit(): void {
    this.msalAuthService
      .handleRedirectObservable()
      .subscribe({
        next: (result) => {
          console.log('Redirect Result:', result);
          this.checkAccount();
        },
        error: (error) => console.error('Redirect Error:', error)
      });
  }

  getOTP() {
    this.authService.getOTP(this.email)
      .pipe(first())
      .subscribe(
        data => {
          if (data.otpSent) {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'OTP Sent Successfully!' });
          } else {
            this.messageService.add({ severity: 'warn', summary: 'Warning', detail: 'Use already having OTP!' });
          }

          this.otpSent = true;
        },
        error => {
          // this.messageService.add({ key: 'retry', severity: 'error', sticky: true, summary: error.statusText, detail: error.message });
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please provide valid Email Id!' });
        });

  }

  login(email: any, token: any) {
    this.authService.login(this.email, this.token)
      .pipe(first())
      .subscribe(
        data => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login Successful!' });
          // if (this.authService.isDM() || this.authService.isCCB()) {
          // this.router.navigate(['dashboard']);
          // } else {
          // this.router.navigate(['demand-intake']);
          // }
        },
        error => {
          this.messageService.add({
            key: 'retry',
            severity: 'error',
            sticky: true,
            summary: error.statusText,
            detail: error.message
          });
        });
  }

  ssoLogin() {
    this.checkAccount();
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
          this.messageService.add({ severity: 'error', summary: 'error', detail: 'Login Failed! : ' + error });
        }
      });
  }

  onRetry() {
    this.login(this.email, this.token);
    this.messageService.clear('retry');
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
    this.authService
      .ssoLogin(response)
      .pipe(first())
      .subscribe(
        data => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login Successful!' });
          // if (this.authService.isDM() || this.authService.isCCB()) {
          // this.router.navigate(['dashboard']);
          // } else {
          // this.router.navigate(['demand-intake']);
          // }
          this.router.navigate(['dashboard']);
        },
        error => {
          this.messageService.add({
            key: 'retry',
            severity: 'error',
            sticky: true,
            summary: error.statusText,
            detail: error.message
          });
        });
  }

  checkAccount() {
    if (this.msalAuthService.instance.getAllAccounts().length > 0 && this.authService.currentUserValue != null) {
      console.log('IF')
      this.getUserDataAndSilentToken();
    } else {
      console.log('ELSE')
      this.loginPopUp();
    }
  }
}
