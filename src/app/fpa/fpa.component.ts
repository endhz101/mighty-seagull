import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fpa',
  templateUrl: './fpa.component.html',
  styleUrls: ['./fpa.component.css']
})
export class FpaComponent implements OnInit {

  dataset: any[] = [
    {id: 1, module: 'Registration', description: 'Registration System'},
    {id: 1, module: 'Registration', description: 'Registration System'},
    {id: 1, module: 'Registration', description: 'Registration System'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
