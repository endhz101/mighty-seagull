import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  onsite: string;
  role: string;
  grade: string;
  module: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {onsite: 'Onsite', role: 'Business Analyst', grade: 'i9-HK', module: '3,500'},
  {onsite: 'Onsite', role: 'Technical Architect', grade: 'i9-HK', module: '3,500'},
  {onsite: 'Onsite', role: 'Business Analyst', grade: 'i9-HK', module: '3,500'},
  {onsite: 'Offshore', role: 'Business Analyst', grade: 'i9-HK', module: '3,500'},
  {onsite: 'Offshore', role: 'Software Developer', grade: 'i9-HK', module: '3,500'},
  {onsite: 'Offshore', role: 'Project Manager', grade: 'i9-HK', module: '3,500'},
];

@Component({
  selector: 'app-costmodel',
  templateUrl: './costmodel.component.html',
  styleUrls: ['./costmodel.component.css']
})
export class CostmodelComponent implements OnInit {

  displayedColumns: string[] = ['onsite', 'role', 'grade', 'module'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
