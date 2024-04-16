import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DemandIntakeService } from 'src/app/services/demand-intake.service';
import { AuthService } from '../../services/auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  title = 'itaap-demand-intake-ui';
  email !: string;
  token !: string;
  otpSent:boolean=false;
  
  constructor(public demandIntakeService: DemandIntakeService, private router: Router,private messageService: MessageService,private authService: AuthService) {
  }

  getOTP(){
    this.authService.getOTP(this.email)
    .pipe(first())
    .subscribe(
        data => {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'OTP Sent Successfully!' });
            this.otpSent=true;
        },
        error => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'OTP Failed, Please Retry...\n'+error });
        });

    // this.otpSent=true;
  }

  login() {

    this.authService.login(this.email, this.token)
    .pipe(first())
    .subscribe(
        data => {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login Successful!' });
            this.router.navigate(['demand-intake']);
        },
        error => {
          alert("Login Failed")
            this.messageService.add({ severity: 'error', summary: 'error', detail: 'Login Failed!' });
        });

  }

}
