import { NgModule } from "@angular/core";
import {Routes,RouterModule} from '@angular/router';
import { ProjectSummaryComponent } from "./projectsummary/projectsummary.component";
import { CostmodelComponent } from "./costmodel/costmodel.component";
import { FpaComponent } from "./fpa/fpa.component";
import { EstimationComponent } from './estimation/estimation.component';

const appRoutes:Routes=[
    {path:'', redirectTo:'/projectsummary', pathMatch:'full'},
    { path: 'projectsummary', component:ProjectSummaryComponent},
    {path: 'fpa', component:FpaComponent},
    {path: 'costmodel', component:CostmodelComponent},
    {path: 'estimation', component:EstimationComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes
        // ,{onSameUrlNavigation: 'reload'}
    )],
    exports:[RouterModule]
})
export class AppRoutingModule{

}
