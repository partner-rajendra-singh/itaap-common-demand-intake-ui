import { Attachment } from "./attachment";
import { CCB } from "./ccb";
import { DM } from "./dm";
import { EADI } from "./eadi";
import { Introduction } from "./introduction"
import { RequesterInfo } from "./requester-info";
import { RequirementCompliance } from "./requirement-compliance";
import { RequirementFunctional } from "./requirement-functional";
import { RequirementNonFunctional } from "./requirement-non-functional";
import { SolutionDirection } from "./solution-direction";

export class Demand {
    introduction: Introduction = new Introduction;
	requesterInfo: RequesterInfo = new RequesterInfo;
	requirementFunctionalInfo: RequirementFunctional = new RequirementFunctional;
	requirementNonFunctionalInfo: RequirementNonFunctional = new RequirementNonFunctional;
	requirementComplianceInfo: RequirementCompliance = new RequirementCompliance;
	solutionDirectionInfo: SolutionDirection = new SolutionDirection;
	eADIInfo: EADI = new EADI;
	demandManagerInfo: DM = new DM;
	ccbInfo: CCB = new CCB;
	attachmentInfo = [
        {
			file: new Object,
			description: '',
			uploadedDate: new Date()
        },{
			file: new Object,
			description: '',
			uploadedDate: new Date()
        },{
			file: new Object,
			description: '',
			uploadedDate: new Date()
        },{
			file: new Object,
			description: '',
			uploadedDate: new Date()
        },{
			file: new Object,
			description: '',
			uploadedDate: new Date()
        } ];
}