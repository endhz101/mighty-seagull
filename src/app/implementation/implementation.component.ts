import { Component, OnInit } from '@angular/core';
import { ImplementationService } from '../data-services/implementation.services'
import { ProjectResourcePlans } from '../model/project-resource-plans.model';
@Component({
  selector: 'app-implementation',
  templateUrl: './implementation.component.html',
  styleUrls: ['./implementation.component.css']
})
export class ImplementationComponent implements OnInit {

  dataset: ProjectResourcePlans[];
  constructor(public implement: ImplementationService) { }

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    //GET DATA FROM API
    try {
      this.dataset = await this.implement.getImplementation().catch(e => { throw e })
      console.log("this.dataset :", this.dataset)
    } catch (error) {
      //utils for toast
      console.error("error: ", error)
    }
  }
  //add this handler to utils
  errorHandler(e) {
    throw e
  }
  //ADD NEW IMPLEMENTATION

  public async addNewImplementation(data?: ProjectResourcePlans) {

    try {
      let newData = data
      const isAdded = await this.implement.postNewImplmementation(newData).catch(this.errorHandler)
      if (isAdded) {
        this.loadData;
      }
    } catch (error) {
      //create centralized toast for errors
      console.error("error :", error)
    }
  }


  //DELETE IMPLEMENTATION
  public async deleteImplementation(id: number) {
    try {
      const isDeleted = await this.implement.deleteImplementation(id).catch(this.errorHandler)
      if (isDeleted) {
        this.loadData;
      }
    } catch (error) {
      //create centralized toast for errors
      console.error("error :", error)
    }

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
