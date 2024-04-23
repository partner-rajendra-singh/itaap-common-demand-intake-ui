import { Component } from '@angular/core';

interface DM {
  email: string;
  status: string;
  createdOn: string;
  updatedOn: string;
}

@Component({
  selector: 'app-dmcrud',
  templateUrl: './dmcrud.component.html',
})
export class DMCRUDComponent {

  dmList!: DM[];

  constructor() { }

  ngOnInit() {
    this.dmList = [
      {
        email: 'partner.pankajkumar.patel_1@philips.com',
        status: 'Active',
        createdOn: '14/Apr/2024 11:59:00 AM IST',
        updatedOn: '14/Apr/2024 11:59:00 PM IST',
      },
      {
        email: 'pradnya@philips.com',
        status: 'Active',
        createdOn: '14/Apr/2024 11:59:00 AM IST',
        updatedOn: '14/Apr/2024 11:59:00 PM IST',
      },
      {
        email: 'sachin@philips.com',
        status: 'Active',
        createdOn: '14/Apr/2024 11:59:00 AM IST',
        updatedOn: '14/Apr/2024 11:59:00 PM IST',
      }
    ];
  }
}
