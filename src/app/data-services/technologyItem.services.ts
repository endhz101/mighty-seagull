
import { Subject } from "rxjs";
import { TechnologyItem } from "../model/technologyItem.model";


export class TechnologyItemServices {
  frontendTechnologyItemChanged = new Subject<TechnologyItem[]>();  
  backendTechnologyItemChanged = new Subject<TechnologyItem[]>();
  storageTechnologyItemChanged = new Subject<TechnologyItem[]>();
  reportingTechnologyItemChanged = new Subject<TechnologyItem[]>();

  private frontendTechnologyItem: TechnologyItem[] = [];
  private backendTechnologyItem: TechnologyItem[] = [];
  private storageTechnologyItem: TechnologyItem[] = [];
  private reportingTechnologyItem: TechnologyItem[] = [];

  setFrontEndTechnologyItem(dbTechnologyItem: TechnologyItem[]) {
    this.frontendTechnologyItem = dbTechnologyItem;
    this.frontendTechnologyItemChanged.next(this.frontendTechnologyItem.slice());
  }

  setBackEndTechnologyItem(dbTechnologyItem: TechnologyItem[]) {
    this.backendTechnologyItem = dbTechnologyItem;
    this.backendTechnologyItemChanged.next(this.backendTechnologyItem.slice());
  }

  setStorageTechnologyItem(dbTechnologyItem: TechnologyItem[]) {
    this.storageTechnologyItem = dbTechnologyItem;
    this.storageTechnologyItemChanged.next(this.storageTechnologyItem.slice());
  }

  setReportingTechnologyItem(dbTechnologyItem: TechnologyItem[]) {
    this.reportingTechnologyItem = dbTechnologyItem;
    this.reportingTechnologyItemChanged.next(this.reportingTechnologyItem.slice());
  }



  getFrontendTechnologyItem() {
    return this.frontendTechnologyItem.slice();
  }
  getBackendTechnologyItem() {
    return this.backendTechnologyItem.slice();
  }
  getStorageTechnologyItem() {
    return this.storageTechnologyItem.slice();
  }
  getReportingTechnologyItem() {
    return this.reportingTechnologyItem.slice();
  }

}
