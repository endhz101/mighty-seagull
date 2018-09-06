import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs-compat';
import { GeneralSystemCharacteristics } from '../model/generalSystemCharacteristics.model';
import { GeneralSystemCharacteristicsServices } from '../data-services/generalSystemCharacteristics.services';


@Injectable()
export class GeneralSystemCharacteristicsStorageServices { 
  constructor(private httpClient: HttpClient, private generalSystemCharacteristicsServices: GeneralSystemCharacteristicsServices) { }

  getGeneralSystemCharacteristics() {

    this.httpClient.get('http://localhost:59258/api/GeneralSystemCharacteristic')
      .map(
        (response) => {
          return response;
        }).subscribe(
          (result: GeneralSystemCharacteristics[]) => {
            this.generalSystemCharacteristicsServices.setGeneralSystemCharacteristic(result);
          });
  }



}
