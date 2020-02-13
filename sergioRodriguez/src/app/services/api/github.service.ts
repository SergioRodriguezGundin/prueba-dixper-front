import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { environment } from 'src/environments/environment';

@Injectable()
export class GithubService {
    constructor( private httpClient: HttpClient){}

    getGithubUsers(name: string) {
        const url = `${environment.apiUrl}/search/users?q=${name}&per_page=10`;
        return this.httpClient.get(url).pipe(
            map((response: any) => response)
        );
    }

    getGithubUser(name: string) {
        const url = `${environment.apiUrl}/users/${name}`;
        return this.httpClient.get(url).pipe(
            map((response: any) => response)
        );
    }

    getRepositoriesByUser(name: string) {
        const url = `${environment.apiUrl}/users/${name}/repos`;
        return this.httpClient.get(url).pipe(
            map((response: any) => response)
        );
    }

}