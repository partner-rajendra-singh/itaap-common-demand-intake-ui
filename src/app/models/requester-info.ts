import { Spoc } from "./spoc";

export class RequesterInfo {
  requestedBy: string = '';
  requesterRole: string = '';
  program: string = '';
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