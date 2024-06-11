export class ReportRequest {
  raisedBy: string = '';
  // stakeholderList: string[] = [];
  fromDate: Date = new Date;
  toDate: Date = new Date;
  status: string = '';
  solutionDirectionList: string[] = [];
  isCrossFunctional: boolean = false;

}