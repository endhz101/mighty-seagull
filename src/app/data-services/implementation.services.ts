
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from "../../../node_modules/@angular/core";
import { environment } from '../../environments/environment';
import { ProjectResourcePlans } from '../model/project-resource-plans.model';

// import { environment } from '../../environments/environment';


@Injectable()
export class ImplementationService {
    // data = [];
    loader: any = null
    constructor(private http: HttpClient) {


    }
    getImplementation() {
        try {
            return this.http.get<Array<ProjectResourcePlans>>(environment.REST_API_URL + 'api/ProjectResourcePlans')
                .toPromise().catch(e => { throw e });
        } catch (error) {
            console.error("error: ", error)
        }
        finally {
        }

    }

    getImplementationbyId(id: any) {
        return this.http.get<any[]>(environment.REST_API_URL + 'api/ProjectResourcePlans/' + 1)
            .toPromise();
    }

    postNewImplmementation(data: ProjectResourcePlans) {
        return this.http.post<any[]>(environment.REST_API_URL + 'api/ProjectResourcePlans/', data)
            .toPromise();
    }

    deleteImplementation(id: any) {
        return this.http.delete<any[]>(environment.REST_API_URL + 'api/ProjectResourcePlans/' + 1)
            .toPromise();
    }

    getProjectPlanbySummary(id: any) {
        return this.http.get<any[]>(environment.REST_API_URL + 'api/ProjectResourcePlans/' + 1)
            .toPromise();
    }

    // editImplementation(data: any[]){
    //     return this.http.put<any[]>(environment.REST_API_URL + 'api/ProjectResourcePlans/', data)
    //     .toPromise();
    // }




    // put(){
    //     return this.http.get<any[]>(environment.REST_API_URL + 'rmds')
    //     .toPromise();
    // }

    // post(){
    //     return this.http.get<any[]>(environment.REST_API_URL + 'rmds')
    //     .toPromise();
    // }

    // delete(){
    //     return this.http.get<any[]>(environment.REST_API_URL + 'rmds')
    //     .toPromise();
    // }

}
