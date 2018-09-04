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
import { HotTableModule} from '@handsontable/angular';
import { ImplementationComponent} from './implementation/implementation.component'
import { MatInputModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { ProjectSummaryStorageServices } from './data-storage-services/projectsummary.storage.services';
import { HttpClientModule } from '@angular/common/http';
import { ProjectSummaryServices } from './data-services/projectsummary.services';

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
    HotTableModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [ProjectSummaryStorageServices,ProjectSummaryServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
