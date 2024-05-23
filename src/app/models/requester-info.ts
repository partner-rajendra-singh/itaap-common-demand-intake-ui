import { Spoc } from "./spoc";

export class RequesterInfo {
  isAnotherRequester: boolean = false;
  requestedBy: string = '';
  requesterRole: string = '';
  program: string = '';
  isDemandPOC: boolean = false;
  project: string = '';
  domain: string = '';
  requestedDate: Date = new Date();
  businessUnit: string[] = [];
  market: string[] = [];
  cpAPI: boolean = false;
  cpReport: boolean = false;
  cpTransactionPlatform: boolean = false;
  approvedBudget: boolean = false;
  clarityProjectId: string = "";
  spoc: Spoc[] = Array(new Spoc);
}