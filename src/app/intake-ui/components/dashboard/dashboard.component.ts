import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemandIntakeService } from '../../services/demand-intake.service';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../services/auth.service';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  decisions!: string[];
  selectedDecision!: string;
  ccbInfo!: any;
  visibleSubmitButton: boolean = true;

  constructor(public eventService: EventService, public demandIntakeService: DemandIntakeService, private router: Router, private messageService: MessageService, public authService: AuthService) { }

  ngOnInit() {

  }
}
