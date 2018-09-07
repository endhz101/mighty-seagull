import { Subject } from "rxjs";
import { GeneralSystemCharacteristicDetails } from "../model/generalSystemCharacteristicDetails.model";



export class GeneralSystemCharacteristicDetailsServices {
  generalSystemCharacteristicDetailsChanged = new Subject<GeneralSystemCharacteristicDetails[]>();
  private generalSystemCharacteristicDetails: GeneralSystemCharacteristicDetails[] = [];

  setGeneralSystemCharacteristicDetails(dbGeneralSystemCharacteristicDetail: GeneralSystemCharacteristicDetails[]) {
    //const dbvalue: GeneralSystemCharacteristicDetails[]=[];
    //dbGeneralSystemCharacteristicDetail.forEach(function (value) {
    //  var item = new GeneralSystemCharacteristicDetails(
    //    value.generalSystemCharacteristicDetailsId,
    //    value.generalSystemCharacteristicId,
    //    value.characteristic,
    //    value.points,
    //    "");
    //  console.log(item);
    //  dbvalue.push(item);
    //});

    this.generalSystemCharacteristicDetails = dbGeneralSystemCharacteristicDetail;
    this.generalSystemCharacteristicDetailsChanged.next(this.generalSystemCharacteristicDetails.slice());

  }

  getGeneralSystemCharacteristics() {
    return this.generalSystemCharacteristicDetails.slice();
  }

}
