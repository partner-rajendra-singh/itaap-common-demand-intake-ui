import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {ConfirmationService, MessageService} from 'primeng/api';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html'
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, private confirmationService: ConfirmationService, private messageService: MessageService) {
  }

  ngOnInit() {
    this.confirmationService.confirm({
      header: 'Are you sure?',
      message: 'Please confirm to Logout!',
      accept: () => {
        this.authService.logout();
        this.router.navigate(['login']);
      },
      reject: () => {
        this.messageService.add({severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 1000});
        this.router.navigate(['view']);
      }
    });
  }
}
