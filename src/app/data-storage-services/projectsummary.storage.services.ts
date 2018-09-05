import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs-compat';
import { GeneralSystemCharacteristics } from '../model/generalSystemCharacteristics.model';
import { ProjectSummaryServices } from '../data-services/projectsummary.services';


@Injectable()
export class ProjectSummaryStorageServices {
  token: string;
  avatar: string;
  constructor(private httpClient: HttpClient, private projectSummaryServices: ProjectSummaryServices) { }

  getGeneralSystemCharacteristics() {

    this.httpClient.get('http://172.168.4.98:8090/api/GeneralSystemCharacteristic')
      .map(
        (generalSystemCharacteristic) => {

          return generalSystemCharacteristic;
        }).subscribe(
          (generalSystemCharacteristic: GeneralSystemCharacteristics[]) => {
            this.projectSummaryServices.setGeneralSystemCharacteristic(generalSystemCharacteristic);
          });
  }





}
