import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DemandIntakeService } from 'src/app/services/demand-intake.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  title = 'itaap-demand-intake-ui';
  otpSent:boolean=false;
  constructor(public demandIntakeService: DemandIntakeService, private router: Router,private messageService: MessageService,private authService: AuthService) {
  }

  getOTP(){
    this.otpSent=true;
  }

  login() {
    this.authService.login();
    this.router.navigate(['demand-intake']);
  }

}
