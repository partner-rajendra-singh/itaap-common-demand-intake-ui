import { ADLL1 } from "./aldl1";
import { DataModel } from "./data-model";
import { DataQuality } from "./data-quality";

export class EADI {
    platformsCapabilityDef: string = '';
    producerAndConsumerSystems: string = '';
    capabilityAPI: string = '';
    dataModelDefinition: string = '';
    demandDocAttached: string = '';
    additionalInfo: string = '';
    dataModel: DataModel = new DataModel;
    dataQuality: DataQuality = new DataQuality;
    adlSL1: ADLL1 = new ADLL1;
}