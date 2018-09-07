import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs-compat';
import { GeneralSystemCharacteristicDetailsServices } from '../data-services/generalSystemCharacteristicDetails.services';
import { GeneralSystemCharacteristicDetails } from '../model/generalSystemCharacteristicDetails.model';
import { environment } from '../../environments/environment';



@Injectable()
export class GeneralSystemCharacteristicDetailsStorage { 
  constructor(private httpClient: HttpClient, private generalSystemCharacteristicDetailsServices: GeneralSystemCharacteristicDetailsServices) { }

  getGeneralSystemCharacteristicDetails(index:number) {

    this.httpClient.get(environment.REST_API_URL +'api/GeneralSystemCharacteristicDetails/GetByGeneralCharacteristicId/'+index)
      .map(
        (response) => {
          return response;
        }).subscribe(
      (result: any[]) => {        
            this.generalSystemCharacteristicDetailsServices.setGeneralSystemCharacteristicDetails(result);
          });
   }



}
