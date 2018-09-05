import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs-compat';
import { TechnologyItem } from '../model/technologyItem.model';
import { TechnologyItemServices } from '../data-services/technologyItem.services';


@Injectable()
export class TechnologyItemStorageServices {
  constructor(private httpClient: HttpClient, private technologyItem: TechnologyItemServices) { }

  getTechnologyItem(index: number) {

    this.httpClient.get('http://172.168.4.98:8090/api/TechnologyItems/GetTechnologyItemsByTTId/' + index)
      .map(
        (technologyItem) => {

          return technologyItem;
        }).subscribe(
          (technologyItem: TechnologyItem[]) => {
            this.technologyItem.setTechnologyItem(technologyItem);
          });
  }

}
