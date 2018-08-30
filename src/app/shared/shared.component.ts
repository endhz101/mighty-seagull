declare function require(path: string);
import { Component, OnInit, Renderer } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {
  logo=require("../../images/pccwlogo1.png"); 
  userDefaultImage=require("../../images/defaultimage.png"); 

  constructor(private router:Router,private render:Renderer) { }

  ngOnInit() {
  }
  gotoProjectSummary()
  {
    this.router.navigate(['/projectSummary']);    
  }
  gotoCostModel()
  {
    this.router.navigate(['/costmodel']);    
  }
  gotoFpa(){
    this.router.navigate(['/fpa']);
  }
}
