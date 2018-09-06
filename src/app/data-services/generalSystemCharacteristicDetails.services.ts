import { Subject } from "rxjs";
import { GeneralSystemCharacteristicDetails } from "../model/generalSystemCharacteristicDetails.model";



export class GeneralSystemCharacteristicDetailsServices {
  generalSystemCharacteristicDetailsChanged = new Subject<GeneralSystemCharacteristicDetails[]>();
  private generalSystemCharacteristicDetails: GeneralSystemCharacteristicDetails[] = [];

  setGeneralSystemCharacteristicDetails(dbGeneralSystemCharacteristicDetail: GeneralSystemCharacteristicDetails[]) {
    this.generalSystemCharacteristicDetails = dbGeneralSystemCharacteristicDetail;
    this.generalSystemCharacteristicDetailsChanged.next(this.generalSystemCharacteristicDetails.slice());
  }

  getGeneralSystemCharacteristics() {
    return this.generalSystemCharacteristicDetails.slice();
  }

}
