
import { Subject } from "rxjs";
import { TechnologyItem } from "../model/technologyItem.model";


export class TechnologyItemServices {
  technologyItemChanged = new Subject<TechnologyItem[]>();
  private technologyItem: TechnologyItem[] = [];

  setTechnologyItem(dbTechnologyItem: TechnologyItem[]) {
    this.technologyItem = dbTechnologyItem;
    this.technologyItemChanged.next(this.technologyItem.slice());
  }

  getTechnologyItem() {
    return this.technologyItem.slice();
  }

}
