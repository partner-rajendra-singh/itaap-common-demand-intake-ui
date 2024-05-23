import { ADLL1 } from "./aldl1";
import { ADLL2 } from "./aldl2";
import { AzureSynapse } from "./azure-synapse";
import { DataModel } from "./data-model";
import { DataQuality } from "./data-quality";
import { Gold } from "./gold";
import { IA } from "./ia";
import { Informatica } from "./informatica";
import { MDM } from "./mdm";

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
    gold: Gold = new Gold;
    informatica: Informatica = new Informatica;
    mdm: MDM = new MDM;
    azureSynapse: AzureSynapse = new AzureSynapse; 
}