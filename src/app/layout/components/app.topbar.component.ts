import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { LayoutService } from "../service/app.layout.service";
import { AuthService } from 'src/app/intake-ui/services/auth.service';
import { EventService } from 'src/app/intake-ui/services/event.service';
import { ApproverDomain } from 'src/app/intake-ui/enums/approver-domain';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html',
  providers: [MessageService, ConfirmationService]
})
export class AppTopBarComponent implements OnInit {

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  user: string = '';
  userRole: string = '';
  isProgressing = false;
  dmDomain: string = '';

  constructor(private router: Router,
    public layoutService: LayoutService,
    private authService: AuthService,
    private eventService: EventService) {
  }
  ngOnInit(): void {
    if (this.authService.isAuthenticatedUser()) {
      this.user = this.authService.currentUserValue.email;
      this.userRole = this.authService.getCurrentUserRole();
      if (this.authService.isDM()) {
        this.dmDomain = this.getDomainValue(this.authService.currentUserValue.domain);
      }
    }

    this.eventService.progressBarEvent.subscribe(response => {
      this.isProgressing = response;
    })
  }

  getDomainValue(key: string): string {
    const status = Object.keys(ApproverDomain).indexOf(key as unknown as ApproverDomain);
    let s = Object.values(ApproverDomain)[status];
    return s;
  }

  logout(event: any) {
    this.router.navigate(['/logout']);

  }
}
