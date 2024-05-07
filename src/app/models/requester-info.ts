export class RequesterInfo {
    program: string = '';
    domain: string = '';
    requestedDate: Date = new Date();
    approvedBudget: boolean = false;
		clarityProjectId: string = "";
    spoc = [{
        email: '',
        role: ''
      },
      {
        email: '',
        role: ''
      },
      {
        email: '',
        role: ''
      },
      {
        email: '',
        role: ''
      },
      {
        email: '',
        role: ''
      }];
}