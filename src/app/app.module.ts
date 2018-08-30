import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedComponent } from './shared/shared.component';
import { ProjectSummaryComponent } from './projectsummary/projectsummary.component';
import { CostmodelComponent } from './costmodel/costmodel.component';
import { AppRoutingModule } from './app.routing.module';
import { Select2Module } from 'ng2-select2';

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    ProjectSummaryComponent,
    CostmodelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Select2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
