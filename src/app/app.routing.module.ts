import { NgModule } from "@angular/core";
import {Routes,RouterModule} from '@angular/router';
import { ProjectSummaryComponent } from "./projectsummary/projectsummary.component";
import { CostmodelComponent } from "./costmodel/costmodel.component";

const appRoutes:Routes=[
    {path:'', redirectTo:'/projectsUmmary', pathMatch:'full'}, 
    {path: 'projectsummary', component:ProjectSummaryComponent},
    {path: 'costmodel', component:CostmodelComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes
        // ,{onSameUrlNavigation: 'reload'}
    )],
    exports:[RouterModule]
})
export class AppRoutingModule{

}
