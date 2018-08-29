import { NgModule } from "@angular/core";
import {Routes,RouterModule} from '@angular/router';
import { ProjectSummaryComponent } from "./projectsummary/projectsummary.component";

const appRoutes:Routes=[
    {path:'', redirectTo:'/projectsummary', pathMatch:'full'}, 
    {path: 'projectsummary', component:ProjectSummaryComponent},


];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes
        // ,{onSameUrlNavigation: 'reload'}
    )],
    exports:[RouterModule]
})
export class AppRoutingModule{

}
