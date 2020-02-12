import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects'
import { Observable, of } from 'rxjs';
import { map, switchMap, mergeMap, catchError } from 'rxjs/operators';

import * as usersActions from 'src/app/redux/actions/users.actions';
import { Repository } from 'src/app/redux/models/repository.model';
import { GithubService } from 'src/app/services/api/github.service';

@Injectable()
export class UsersEffects {

    constructor(
        private actions$: Actions,
        private githubService: GithubService
    ){}

    @Effect()
    getGithubUsers: Observable<Action> = this.actions$.pipe(
        ofType(usersActions.GET_GITHUB_USERS),
        switchMap((action: usersActions.GetUsersGithub) => {
            return this.githubService.getGithubUsers(action.payload).pipe(
                map((githubUsers: any) => new usersActions.GetUsersGithubSuccess(githubUsers.items)),
                catchError((error: any) => of(new usersActions.GetUsersGithubError())) 
            );
        })
    )

    @Effect()
    getGithubUser: Observable<Action> = this.actions$.pipe(
        ofType(usersActions.GET_GITHUB_USER),
        mergeMap((action: usersActions.GetUserGithub) => {
            return this.githubService.getGithubUser(action.payload).pipe(
                mergeMap((githubUser: any) => {
                    return [
                        new usersActions.GetUserGithubSuccess(githubUser),
                        new usersActions.GetRepositoriesByUser(action.payload)
                    ]
                })
            );
        })
    )

    @Effect()
    getRepositoriesByUser: Observable<Action> = this.actions$.pipe(
        ofType(usersActions.GET_REPOSITORIES_BY_USER),
        switchMap((action: usersActions.GetRepositoriesByUser) => {
            return this.githubService.getRepositoriesByUser(action.payload).pipe(
                map((repositories: Repository[]) => new usersActions.GetRepositoriesByUserSuccess(repositories)),
                catchError((error: any) => of(new usersActions.GetRepositoriesByUserError())) 
            );
        })
    )
}