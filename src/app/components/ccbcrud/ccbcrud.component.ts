import { Component } from '@angular/core';

interface CCB {
  email: string;
  status: string;
  createdOn: string;
  updatedOn: string;
}

@Component({
  selector: 'app-ccbcrud',
  templateUrl: './ccbcrud.component.html',
})
export class CCBCRUDComponent {
  ccbList!: CCB[];

  constructor() {}

  ngOnInit() {
    this.ccbList = [
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
