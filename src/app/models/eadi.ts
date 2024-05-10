import { ADLL1 } from "./aldl1";
import { ADLL2 } from "./aldl2";
import { DataModel } from "./data-model";
import { DataQuality } from "./data-quality";
import { IA } from "./ia";

export class EADI {
    platformsCapabilityDef: string = '';
    producerAndConsumerSystems: string = '';
    capabilityAPI: string = '';
    dataModelDefinition: string = '';
    demandDocAttached: string = '';
    additionalInfo: string = '';
    dataModel: DataModel = new DataModel;
    dataQuality: DataQuality = new DataQuality;
    adlL1: ADLL1 = new ADLL1;
    adlL2: ADLL2 = new ADLL2;
    ia: IA = new IA;
}