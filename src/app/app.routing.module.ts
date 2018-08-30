import { NgModule } from "@angular/core";
import {Routes,RouterModule} from '@angular/router';
import { ProjectSummaryComponent } from "./projectsummary/projectsummary.component";
import { FpaComponent } from "./fpa/fpa.component";

const appRoutes:Routes=[
    {path:'', redirectTo:'/projectSummary', pathMatch:'full'}, 
    {path: 'projectSummary', component:ProjectSummaryComponent},
    {path: 'fpa', component:FpaComponent}


];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes
        // ,{onSameUrlNavigation: 'reload'}
    )],
    exports:[RouterModule]
})
export class AppRoutingModule{

}
