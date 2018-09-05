import { Component, OnInit } from '@angular/core';
import {ELEMENT_DATA} from  '../data-services/costmodel.services';

export interface CostModel {
  onsite: string;
  role: string;
  grade: string;
  module: string;
}

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
