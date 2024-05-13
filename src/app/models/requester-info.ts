export class RequesterInfo {
    program: string = '';
    domain: string = '';
    requestedDate: Date = new Date();
    businessUnit: string = '';
    market: string = '';
    cpAPI: boolean = false;
    cpReport: boolean = false;
    cpTransactionPlatform: boolean = false;
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