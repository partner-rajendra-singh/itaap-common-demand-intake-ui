export class RequirementFunctional {

    today : Date =  new Date();

    statement: string = '';
    scope: string = '';
    businessValue: string = '';
    goLiveApproach: string = 'oneTime';
    bglDate: Date = new Date(this.today.setDate(this.today.getDate() + 1));
    sourceDetails: string = '';
	targetDetails: string = '';
	mappingRequirement: string = '';
}