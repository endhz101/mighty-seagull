import { Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ng2-select2';
import { TechnologyItem } from '../model/technologyItem.model';
import { GeneralSystemCharacteristics } from '../model/generalSystemCharacteristics.model';
import { GeneralSystemCharacteristicsDetails } from '../model/generalSystemCharacteristicsDetails.model';
import { ProjectSummaryStorageServices } from '../data-storage-services/projectsummary.storage.services';
import { ProjectSummaryServices } from '../data-services/projectsummary.services';
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-projectsummary',
  templateUrl: './projectsummary.component.html',
  styleUrls: ['./projectsummary.component.css']
})
export class ProjectSummaryComponent implements OnInit {
  architecture: Array<Select2OptionData>;
  methodology: Array<Select2OptionData>;
  //Option
  frontendOption: Array<Select2OptionData>;
  backendOption:Array<Select2OptionData>;
  reportingOption:Array<Select2OptionData>;
  storageOption:Array<Select2OptionData>;
  selectOptions={};
  //Selected 
  selectedFrontend= [];
  selectedBackend= [];
  selectedStorage= [];
  selectedReporting = [];

  //general System Characteristics
  listGeneralSystemCharacteristics: GeneralSystemCharacteristics[] = [];
  listGeneralSystemCharacteristicsDetails: GeneralSystemCharacteristicsDetails[] = [];

  subscriptionGeneralSystemChar: Subscription;


  constructor(private projectSummaryStorageServices: ProjectSummaryStorageServices, private projectSummaryServices:ProjectSummaryServices) { }

  ngOnInit() {


    this.projectSummaryStorageServices.getGeneralSystemCharacteristics();
    this.subscriptionGeneralSystemChar = this.projectSummaryServices.generalSystemCharacteristicsChanged
      .subscribe((generalSystemCharacteristics: GeneralSystemCharacteristics[]) => {
        this.listGeneralSystemCharacteristics = generalSystemCharacteristics;       
      });

    this.architecture = [
      {
        id: '1',
        text: '3-Tier Architecture'
      },
      {
        id: '2',     
        text: 'Mainframe'
      } ,
      {
        id: '2',   
        text: 'Midrange'
      } ,
      {
        id: '3',    
        text: 'Mobile Apps'
      } ,
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
    this.frontendOption = [
      {
        id: '1',
        text: 'Ionic/Angular'
      },
      {
        id: '2',     
        text: 'Html5'
      },
      {
        id: '3',     
        text: 'Jquery'
      },
      {
        id: '4',     
        text: 'ReactJS'
      },
      {
        id: '5',     
        text: 'VB / VBA'
      }
    ];
    this.backendOption = [
      {
        id: '1',
        text: 'ASP.Net'
      },
      {
        id: '2',     
        text: 'J2EE/Java'
      },
      {
        id: '3',     
        text: 'Stored Procedure'
      },
      {
        id: '4',     
        text: 'COBOL / Natural'
      },
      {
        id: '5',     
        text: 'C / C++'
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
    this.selectOptions={ 
      placeholder: { id: '', text: 'Select Record' },
      width: "100%",   
      name:'empPosition'
     }




  }


  fontendChanged(e: any): void {   

    const item = new TechnologyItem(e.data[0].id,e.data[0].text)    
    
    const exist= this.selectedFrontend.find(x=>x.frontendId==item.technologyItemId);
    if (exist==undefined) this.selectedFrontend.push(item);
  }

  frontendSelectedRemove(index:number)
  {
    this.selectedFrontend.splice(index,1);
  }

  backendChanged(e: any): void {   

    const item = new TechnologyItem(e.data[0].id,e.data[0].text)        
    const exist= this.selectedBackend.find(x=>x.back==item.technologyItemId);
    if (exist==undefined) this.selectedBackend.push(item);
  }

  backendSelectedRemove(index:number)
  {    
    this.selectedBackend.splice(index,1);
  }


  reportingChanged(e: any): void {   

    const item = new TechnologyItem(e.data[0].id,e.data[0].text)        
    const exist= this.selectedReporting.find(x=>x.back==item.technologyItemId);
    if (exist==undefined) this.selectedReporting.push(item);
  }

  reportingSelectedRemove(index:number)
  {    
    this.selectedReporting.splice(index,1);
  }

  storageChanged(e: any): void {   

    const item = new TechnologyItem(e.data[0].id,e.data[0].text)        
    const exist= this.selectedStorage.find(x=>x.back==item.technologyItemId);
    if (exist==undefined) this.selectedStorage.push(item);
  }

  storageSelectedRemove(index:number)
  {    
    this.selectedStorage.splice(index,1);
  }

  

}
