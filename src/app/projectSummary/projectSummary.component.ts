import { Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ng2-select2';


@Component({
  selector: 'app-projectsummary',
  templateUrl: './projectsummary.component.html',
  styleUrls: ['./projectsummary.component.css']
})
export class ProjectSummaryComponent implements OnInit {
  architecture: Array<Select2OptionData>;
  methodology: Array<Select2OptionData>;
  frontend: Array<Select2OptionData>;
  backend:Array<Select2OptionData>;
  reporting:Array<Select2OptionData>;
  storage:Array<Select2OptionData>;
  selectOptions={};
  startValue:string; 
  selectedFrontend= [];
  selectedBackend= [];
  selectedStorage= [];
  selectedReporting= [];
  constructor() { }

  ngOnInit() {

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

    this.frontend = [
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


    this.backend = [
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


    this.reporting = [
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
        text: 'Oracle Report'
      }
    ];

    this.storage = [
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
     this.startValue = "0";  

  }

  

}
