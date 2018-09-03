import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedComponent } from './shared/shared.component';
import { ProjectSummaryComponent } from './projectsummary/projectsummary.component';
import { CostmodelComponent } from './costmodel/costmodel.component';
import { FpaComponent } from './fpa/fpa.component';
import { AppRoutingModule } from './app.routing.module';
import { Select2Module } from 'ng2-select2';
import { EstimationComponent} from './estimation/estimation.component';
import {HotTableModule} from '@handsontable/angular';
import {ImplementationComponent} from './implementation/implementation.component'

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    ProjectSummaryComponent,
    CostmodelComponent,
    FpaComponent,
    EstimationComponent,
    ImplementationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Select2Module,
    HotTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
