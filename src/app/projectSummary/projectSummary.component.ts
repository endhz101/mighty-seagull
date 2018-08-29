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
  selectOptions={};
  startValue:string; 
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

    this.selectOptions={ 
      placeholder: { id: '', text: 'Select Record' },
      width: "100%",   
      name:'empPosition'
     }
     this.startValue = "0";  

  }

  

}
