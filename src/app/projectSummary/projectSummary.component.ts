import { Component, OnInit, OnDestroy } from '@angular/core';
import { Select2OptionData } from 'ng2-select2';
import { Subscription } from 'rxjs';
import { TechnologyItem } from '../model/technologyItem.model';
import { GeneralSystemCharacteristics } from '../model/generalSystemCharacteristics.model';
import { GeneralSystemCharacteristicDetails } from '../model/generalSystemCharacteristicDetails.model';
import { GeneralSystemCharacteristicsServices } from '../data-services/generalSystemCharacteristics.services';
import { GeneralSystemCharacteristicsStorageServices } from '../data-storage-services/generalSystemCharacteristics.storage.services';
import { TechnologyItemStorageServices } from '../data-storage-services/technologyItem.storage.services';
import { TechnologyItemServices } from '../data-services/technologyItem.services';
import { GeneralSystemCharacteristicDetailsServices } from '../data-services/generalSystemCharacteristicDetails.services';
import { GeneralSystemCharacteristicDetailsStorage } from '../data-storage-services/generalSystemCharacteristicDetails.storage.services';


declare var $: any;

@Component({
  selector: 'app-projectsummary',
  templateUrl: './projectsummary.component.html',
  styleUrls: ['./projectsummary.component.css']
})
export class ProjectSummaryComponent implements OnInit, OnDestroy {
  architecture: Array<Select2OptionData>;
  methodology: Array<Select2OptionData>;
  //Option
  frontendOption: Array<Select2OptionData>;
  backendOption: Array<Select2OptionData>;
  reportingOption: Array<Select2OptionData>;
  storageOption: Array<Select2OptionData>;
  selectOptions = {};
  //Selected 
  selectedFrontend = [];
  selectedBackend = [];
  selectedStorage = [];
  selectedReporting = [];


  //general System Characteristics
  listGeneralSystemCharacteristics: GeneralSystemCharacteristics[] = [];
  listGeneralSystemCharacteristicsDetails: GeneralSystemCharacteristicDetails[] = [];
  generalSystemCharacteristicTitle: string;
  optionSelected: number;


  subscriptionGeneralSystemChar: Subscription;
  subscriptionFrontend: Subscription;
  subscriptionBackend: Subscription;
  subscriptionStorage: Subscription;
  subscriptionReporting: Subscription;
  subscriptiongGeneralSystemCharDetails:Subscription;

  constructor(private generalSystemCharacteristicsStorageServices: GeneralSystemCharacteristicsStorageServices,
    private generalSystemCharacteristicsServices: GeneralSystemCharacteristicsServices,
    private technologyItemStorage: TechnologyItemStorageServices,
    private technologyItemServices: TechnologyItemServices,
    private generalSystemCharacteristicDetailsServices: GeneralSystemCharacteristicDetailsServices,
    private generalSystemCharacteristicDetailsStorage:GeneralSystemCharacteristicDetailsStorage ) { }

  ngOnInit() {


    this.generalSystemCharacteristicsStorageServices.getGeneralSystemCharacteristics();

    //Technology List
    this.technologyItemStorage.getTechnologyItem(1);
    this.technologyItemStorage.getTechnologyItem(2);
    this.technologyItemStorage.getTechnologyItem(3);
    this.technologyItemStorage.getTechnologyItem(4);

    this.subscriptionGeneralSystemChar = this.generalSystemCharacteristicsServices.generalSystemCharacteristicsChanged
      .subscribe((generalSystemCharacteristics: GeneralSystemCharacteristics[]) => {
        this.listGeneralSystemCharacteristics = generalSystemCharacteristics;
      });
     this.subscriptionFrontend = this.technologyItemServices.frontendTechnologyItemChanged
       .subscribe((result: TechnologyItem[]) => {
         this.frontendOption = this.assignOptionValue(result);        
      });
    this.subscriptionBackend = this.technologyItemServices.backendTechnologyItemChanged
      .subscribe((result: TechnologyItem[]) => {
        this.backendOption = this.assignOptionValue(result);
      });

    this.subscriptionStorage = this.technologyItemServices.storageTechnologyItemChanged
      .subscribe((result: TechnologyItem[]) => {
        this.storageOption = this.assignOptionValue(result);
      });

    this.subscriptionReporting = this.technologyItemServices.reportingTechnologyItemChanged
      .subscribe((result: TechnologyItem[]) => {
        this.reportingOption = this.assignOptionValue(result);
      });


    this.subscriptiongGeneralSystemCharDetails = this.generalSystemCharacteristicDetailsServices.generalSystemCharacteristicDetailsChanged
      .subscribe((result: GeneralSystemCharacteristicDetails[]) => {
        this.listGeneralSystemCharacteristicsDetails = result;
        
      });

    this.architecture = [
      {
        id: '1',
        text: '3-Tier Architecture'
      },
      {
        id: '2',
        text: 'Mainframe'
      },
      {
        id: '2',
        text: 'Midrange'
      },
      {
        id: '3',
        text: 'Mobile Apps'
      },
      {
        id: '4',
        text: 'SaaS in Cloud'
      }
    ];
    this.methodology = [
      {
        id: '1',
        text: 'Waterfall'
      },
      {
        id: '2',

        text: 'Agile Scrum'
      },
      {
        id: '3',
        text: 'Others'
      }
    ];
 
    this.reportingOption = [
      {
        id: '1',
        text: 'OBIEE'
      },
      {
        id: '2',
        text: 'Qlik'
      },
      {
        id: '3',
        text: 'Cognos'
      },
      {
        id: '4',
        text: 'Crystal Report'
      },
      {
        id: '5',
        text: "Oracle Report"
      }
    ];
    this.storageOption = [
      {
        id: '1',
        text: 'RDBMS'
      },
      {
        id: '2',
        text: 'Postgres'
      },
      {
        id: '3',
        text: 'MSSQL'
      },
      {
        id: '4',
        text: 'MongoDB'
      },
      {
        id: '5',
        text: 'MySql'
      }
    ];
    this.selectOptions = {
      placeholder: { id: '', text: 'Select Record' },
      width: "100%",
      name: 'empPosition'
    }
  }

  assignOptionValue(item: TechnologyItem[]) {
    const tempData = [];
    var data = {
      'id': '',
      'text': ''
    }
    tempData.push(data);
    item.forEach(element => {
      var data = {
        'id': element.technologyItemId,
        'text': element.description
      }
      tempData.push(data);
    });
    return tempData;
  }


  ngOnDestroy() {
    this.subscriptionGeneralSystemChar.unsubscribe();
    this.subscriptionFrontend.unsubscribe();
    this.subscriptionBackend.unsubscribe();
    this.subscriptionStorage.unsubscribe();
    this.subscriptionReporting.unsubscribe();
    this.subscriptionReporting.unsubscribe();
  }
  fontendChanged(e: any): void {
    if (e.data[0].text.length > 0) {
      const item = new TechnologyItem(e.data[0].id, e.data[0].text)
      const exist = this.selectedFrontend.find(x => x.frontendId == item.technologyItemId);
      if (exist == undefined) this.selectedFrontend.push(item);
    }
    
  }

  frontendSelectedRemove(index: number) {
    this.selectedFrontend.splice(index, 1);
  }

  backendChanged(e: any): void {
    if (e.data[0].text.length > 0) {
      const item = new TechnologyItem(e.data[0].id, e.data[0].text)
      const exist = this.selectedBackend.find(x => x.back == item.technologyItemId);
      if (exist == undefined) this.selectedBackend.push(item);
    }
  }

  backendSelectedRemove(index: number) {
    this.selectedBackend.splice(index, 1);
  }


  reportingChanged(e: any): void {
    if (e.data[0].text.length > 0) {
      const item = new TechnologyItem(e.data[0].id, e.data[0].text)
      const exist = this.selectedReporting.find(x => x.back == item.technologyItemId);
      if (exist == undefined) this.selectedReporting.push(item);
    }
  }

  reportingSelectedRemove(index: number) {
    this.selectedReporting.splice(index, 1);
  }

  storageChanged(e: any): void {
    if (e.data[0].text.length > 0) {
      const item = new TechnologyItem(e.data[0].id, e.data[0].text)
      const exist = this.selectedStorage.find(x => x.back == item.technologyItemId);
      if (exist == undefined) this.selectedStorage.push(item);
    }
  }

  storageSelectedRemove(index: number) {
    this.selectedStorage.splice(index, 1);
  }

  onGeneralSystemCharacteristic(item: GeneralSystemCharacteristics) {
   
    this.generalSystemCharacteristicTitle = item.description;
    this.generalSystemCharacteristicDetailsStorage.getGeneralSystemCharacteristicDetails(item.generalSystemCharacteristicId);
    $('#modalGeneralSystemCharacteristic').modal("show");
  }
  getRadioSelected() {
        
  }

  onItemChange(item:number) {
    console.log(item);
    this.optionSelected = item;
  }

}
