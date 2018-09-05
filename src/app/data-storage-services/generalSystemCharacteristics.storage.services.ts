import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs-compat';
import { GeneralSystemCharacteristics } from '../model/generalSystemCharacteristics.model';
import { TechnologyItem } from '../model/technologyItem.model';
import { GeneralSystemCharacteristicsServices } from '../data-services/generalSystemCharacteristics.services';


@Injectable()
export class GeneralSystemCharacteristicsStorageServices { 
  constructor(private httpClient: HttpClient, private generalSystemCharacteristicsServices: GeneralSystemCharacteristicsServices) { }

  getGeneralSystemCharacteristics() {

    this.httpClient.get('http://172.168.4.98:8090/api/GeneralSystemCharacteristic')
      .map(
        (generalSystemCharacteristic) => {
          return generalSystemCharacteristic;
        }).subscribe(
          (generalSystemCharacteristic: GeneralSystemCharacteristics[]) => {
            this.generalSystemCharacteristicsServices.setGeneralSystemCharacteristic(generalSystemCharacteristic);
          });
  }



}
