import { Component, OnInit } from '@angular/core';
import {FPAs} from '../data-services/fpa.services';

@Component({
  selector: 'app-fpa',
  templateUrl: './fpa.component.html',
  styleUrls: ['./fpa.component.css']
})
export class FpaComponent implements OnInit {
  dataset = FPAs;

  constructor() { }

  ngOnInit() {
  }

}
