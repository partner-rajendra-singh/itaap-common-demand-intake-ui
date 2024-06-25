import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {DemandIntakeService} from "../../../services/demand-intake.service";
import {EventService} from "../../../services/event.service";
import {AdminService} from "../../../services/admin.service";
import {FieldsetModule} from "primeng/fieldset";
import {AutoCompleteModule} from "primeng/autocomplete";
import {AvatarModule} from "primeng/avatar";
import {FormsModule} from "@angular/forms";
import {GraphService} from "../graph.service";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../../auth/auth.service";

@Component({
  selector: 'app-email-autocomplete',
  templateUrl: './email-auto-complete.component.html',
  imports: [
    FieldsetModule,
    AutoCompleteModule,
    AvatarModule,
    FormsModule
  ],
  standalone: true
})
export class EmailAutoCompleteComponent implements OnInit {

  filteredAssignee: any;
  allUsers: any = [];

  constructor(public demandIntakeService: DemandIntakeService,
              private messageService: MessageService,
              public eventService: EventService,
              public graphService: GraphService,
              public authService: AuthService,
              private http: HttpClient,
              public adminService: AdminService) {
  }

  ngOnInit() {

  }

  filterAssignee(event: any) {
    const filtered: any[] = [];
    const query = event.query;
    for (let i = 0; i < this.allUsers.length; i++) {
      const user = this.allUsers[i];
      if (user.name.toLowerCase().indexOf(query.toLowerCase()) != -1) {
        filtered.push(this.authService.currentLoggedInUser.account.username);
      }
    }
    this.graphService
      .searchUser(query)
      .subscribe(response => {
          console.log('getProfilePhoto() : SUCCESS -> ', response);
          for (let i = 0; i < response.value; i++) {
            const user = this.allUsers[i];
            if (user.name.toLowerCase().indexOf(query.toLowerCase()) != -1) {
              filtered.push(user.displayName);
            }
          }
        },
        error => {
          console.log('getProfilePhoto() : ERROR -> ', error);
          const response: any = {"value":[{"businessPhones":["7290080876"],"displayName":"Rajendra Singh","givenName":"Rajendra","jobTitle":null,"mail":null,"mobilePhone":null,"officeLocation":null,"preferredLanguage":"en","surname":"Singh","userPrincipalName":"nihilarians@nihilarians.onmicrosoft.com","id":"c3b5799d-144b-441d-a9a8-b6c1c3a43d2d"}]}
          for (let i = 0; i < response.value.length; i++) {
            const user = response.value[i];
            if (user.displayName.toLowerCase().indexOf(query.toLowerCase()) != -1) {
              filtered.push(user.displayName);
            }
          }
        });
    this.filteredAssignee = filtered;
  }
}
