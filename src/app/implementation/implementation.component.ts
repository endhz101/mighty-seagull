import { Component, OnInit } from '@angular/core';
import { ImplementationService } from '../data-services/implementation.services'

@Component({
  selector: 'app-implementation',
  templateUrl: './implementation.component.html',
  styleUrls: ['./implementation.component.css']
})
export class ImplementationComponent implements OnInit {

  dataset: any[];

  constructor(public implement: ImplementationService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    //GET DATA FROM API
    this.implement.getImplementation().then(imp => {
      console.log("Implementation", imp)
      this.dataset = imp;
    }).catch(error => {
      console.log("Error occured")
    });

    //GET DATA BY ID FROM API
    this.implement.getImplementationbyId(1).then(imps => {
      console.log("Implementation get by Id", imps)
    }).catch(error => {
      console.log("Error occured")
    });
  }

  //ADD NEW IMPLEMENTATION
  public async addNewImplementation() {
    // await this.implement.postNewImplmementation(this.dataset)

    this.implement.postNewImplmementation(this.dataset).then(del => {
      this.loadData; //LOAD DATA AFTER ADD
    }).catch(error => {
      console.log("Error occured")
    });
    this.loadData; //LOAD DATA AFTER ADD
  }


  //DELETE IMPLEMENTATION
  public async deleteImplementation() {
    // await this.implement.deleteImplementation(1)
   
    this.implement.deleteImplementation(1).then(del => {
      this.loadData; //LOAD DATA AFTER ADD
    }).catch(error => {
      console.log("Error occured")
    });

  }

  //EDIT IMPLEMENTATION
  public async editImplementaion() {
    let newData;
    // await this.implement.deleteImplementation(1)
    
    // this.implement.deleteImplementation(1).then(del => {
    //   this.loadData; //LOAD DATA AFTER ADD
    // }).catch(error => {
    //   console.log("Error occured")
    // });
  }
}
