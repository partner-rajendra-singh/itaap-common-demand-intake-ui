
import { Attachment } from "./attachment";
import { CCB } from "./ccb";
import { DM } from "./dm";
import { EADI } from "./eadi";
import { Introduction } from "./introduction"
import { RequesterInfo } from "./requester-info";
import { RequirementCompliance } from "./requirement-compliance";
import { RequirementFunctional } from "./requirement-functional";
import { RequirementNonFunctional } from "./requirement-non-functional";


export class Demand {

	introduction: Introduction = new Introduction;
	requesterInfo: RequesterInfo = new RequesterInfo;
	requirementFunctionalInfo: RequirementFunctional = new RequirementFunctional;
	requirementNonFunctionalInfo: RequirementNonFunctional = new RequirementNonFunctional;
	requirementComplianceInfo: RequirementCompliance = new RequirementCompliance;
	solutionDirectionInfo = [
		{
			solution: 'integration',
			value: false,
			dmEmail: '',
			decisionDate: new Date,
			decision: '',
			remarks: ''
		},
		{
			solution: 'dataModelling',
			value: false,
			dmEmail: '',
			decisionDate: new Date,
			decision: '',
			remarks: ''
		},
		{
			solution: 'adlL1',
			value: false,
			dmEmail: '',
			decisionDate: new Date,
			decision: '',
			remarks: ''
		},
		{
			solution: 'adlL2',
			value: false,
			dmEmail: '',
			decisionDate: new Date,
			decision: '',
			remarks: ''
		},
		{
			solution: 'gold',
			value: false,
			dmEmail: '',
			decisionDate: new Date,
			decision: '',
			remarks: ''
		},
		{
			solution: 'mdm',
			value: false,
			dmEmail: '',
			decisionDate: new Date,
			decision: '',
			remarks: ''
		}
		, {
			solution: 'ia',
			value: false,
			dmEmail: '',
			decisionDate: new Date,
			decision: '',
			remarks: ''
		}
		, {
			solution: 'dataQuality',
			value: false,
			dmEmail: '',
			decisionDate: new Date,
			decision: '',
			remarks: ''
		}, {
			solution: 'informatica',
			value: false,
			dmEmail: '',
			decisionDate: new Date,
			decision: '',
			remarks: ''
		}, {
			solution: 'azureSynapse',
			value: false,
			dmEmail: '',
			decisionDate: new Date,
			decision: '',
			remarks: ''
		}];
	eADIInfo: EADI = new EADI;
	demandManagerInfo: DM = new DM;
	ccbInfo: CCB = new CCB;
	attachmentInfo: Attachment[] = Array();
	
}