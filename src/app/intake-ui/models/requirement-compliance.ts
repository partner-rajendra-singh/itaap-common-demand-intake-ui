import { Compliance } from "./compliance";

export class RequirementCompliance {
    sox: boolean = false;
    security: boolean = false;
    privacy: boolean = false;
    qms: boolean = false;
	valgEntityId: string = "";
	qsia: boolean = false;
	compliance = [
        {
            key: '',
            value: false
        },{
            key: '',
            value: false
        },{
            key: '',
            value: false
        }
    ];
}