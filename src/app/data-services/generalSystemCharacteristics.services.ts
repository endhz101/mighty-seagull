
import { Subject } from "rxjs";
import { GeneralSystemCharacteristics } from "../model/generalSystemCharacteristics.model";


export class GeneralSystemCharacteristicsServices {
  generalSystemCharacteristicsChanged = new Subject<GeneralSystemCharacteristics[]>();
  private generalSystemCharacteristics: GeneralSystemCharacteristics[] = [];

  setGeneralSystemCharacteristic(dbGeneralSystemCharacteristic: GeneralSystemCharacteristics[]) {
    this.generalSystemCharacteristics = dbGeneralSystemCharacteristic;
    this.generalSystemCharacteristicsChanged.next(this.generalSystemCharacteristics.slice());
  }

  getGeneralSystemCharacteristics() {
    return this.generalSystemCharacteristics.slice();
  }

}
