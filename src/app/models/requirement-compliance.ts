import { Compliance } from "./compliance";

export class RequirementCompliance {
    sox: boolean = false;
    fda: boolean = false;
    security: boolean = false;
    privacy: boolean = false;
	compliance : Compliance[] = [
        {
            key: '',
            value: ''
        },{
            key: '',
            value: ''
        },{
            key: '',
            value: ''
        }
    ];
}