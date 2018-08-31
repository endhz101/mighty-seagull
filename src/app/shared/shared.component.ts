
declare function require(path: string);
import { Component, OnInit, Renderer } from '@angular/core';
import { Router } from '@angular/router';
import { NavUrl } from '../model/navurl.model';


@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {
  logo = require("../../images/pccwlogo1.png");
  userDefaultImage = require("../../images/defaultimage.png");
  listNavUrl: NavUrl[] = [
    new NavUrl(0, "Project Summary", "active"),
    new NavUrl(1, "FPA", ""),
    new NavUrl(2, "Implementation", ""),
    new NavUrl(3, "Project Estimation", ""),
    new NavUrl(4, "Cost Model", "")
  ]

  constructor(private router: Router, private render: Renderer) { }

  ngOnInit() {
  }

  routeTo(item: NavUrl) {


    switch (item.navUrlId) {
      case 0: {
        this.router.navigate(['/projectsummary']);
        break;
      }
      case 1: {
        this.router.navigate(['/fpa']);
        break;
      }
      case 3: {
        this.router.navigate(['/estimation']);
        break;
      }
      case 4: {
        this.router.navigate(['/costmodel']);
        break;
      }
    }
    this.updateMyClass(item);
  }
  updateMyClass(item: NavUrl) {
    const checkActive = this.listNavUrl.find(x => x.myclass == "active");
    this.listNavUrl[checkActive.navUrlId].myclass = "";
    this.listNavUrl[item.navUrlId].myclass = "active";
  }
}
