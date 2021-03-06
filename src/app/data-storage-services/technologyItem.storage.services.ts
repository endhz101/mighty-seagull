import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs-compat';
import { TechnologyItem } from '../model/technologyItem.model';
import { TechnologyItemServices } from '../data-services/technologyItem.services';
import { environment } from '../../environments/environment';


@Injectable()
export class TechnologyItemStorageServices {
  constructor(private httpClient: HttpClient, private technologyItem: TechnologyItemServices) { }

  getTechnologyItem(index: number) {

    this.httpClient.get(environment.REST_API_URL +'api/TechnologyItems/GetTechnologyItemsByTTId/' + index)
      .map(
        (response) => {

          return response;
        }).subscribe(
      (result: TechnologyItem[]) => {
            switch (index) {
              case 1:
                {
                  this.technologyItem.setFrontEndTechnologyItem(result);
                  break;
                }
              case 2:
                {
                  this.technologyItem.setBackEndTechnologyItem(result);
                  break;
                }
              case 3:
                {
                  this.technologyItem.setStorageTechnologyItem(result);
                  break;
                }
              case 4:
                {
                  this.technologyItem.setReportingTechnologyItem(result);
                  break;
                }
            }
          });
  }

}
