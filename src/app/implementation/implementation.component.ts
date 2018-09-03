import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-implementation',
  templateUrl: './implementation.component.html',
  styleUrls: ['./implementation.component.css']
})
export class  ImplementationComponent implements OnInit{
  dataset: any[] = [
    {id: 1, module: 'implementation', description: 'Registration System'},
    {id: 1, module: 'implementation', description: 'Registration System'},
    {id: 1, module: 'implementation', description: 'Registration System'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
