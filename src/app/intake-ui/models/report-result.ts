export class ReportResult {
    demandIntakeId!: number;
    title: string = '';
    description: string = '';
    status!: string;
    requestedBy: string = '';
    requesterDomain: string = '';
    solution: string = '';
    requestedDate: Date = new Date;
    isCrossFunctional: boolean = false;
    dmDecisionDate: Date = new Date;
    dmEmail: string = '';
    dmDecision: string = '';
    ccbDecisionDate: Date = new Date;
    ccbEmail: string = '';
    ccbDecision: string = '';
    spocRemarks: string = '';
	spocRole: string = '';
	spocEmail: string = '';

}