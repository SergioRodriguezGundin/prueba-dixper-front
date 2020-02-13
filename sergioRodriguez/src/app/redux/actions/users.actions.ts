import { Action } from '@ngrx/store';
import { BaseGithubUser } from '../models/user.model';
import { Repository } from '../models/repository.model';

export const SET_DEFAULT_STATE = '[Users Github] Set default state'

export const GET_GITHUB_USERS = '[Users Github] Get users'
export const GET_GITHUB_USERS_SUCCESS = '[Users Github] Get users success'

export const GET_GITHUB_USER = '[User Github] Get user'
export const GET_GITHUB_USER_SUCCESS = '[User Github] Get user success'

export const GET_REPOSITORIES_BY_USER = '[Repos Github] Get repositories by user'
export const GET_REPOSITORIES_BY_USER_SUCCESS = '[Repos Github] Get repositories by user success'

export class SetDefaultState implements Action {
    readonly type = SET_DEFAULT_STATE;
}

export class GetUsersGithub implements Action {
    readonly type = GET_GITHUB_USERS;
    constructor( public payload: string) {}
}

export class GetUsersGithubSuccess implements Action {
    readonly type = GET_GITHUB_USERS_SUCCESS;
    constructor( public users: BaseGithubUser[]) {}
}

export class GetUserGithub implements Action {
    readonly type = GET_GITHUB_USER;
    constructor( public payload: string) {}
}

export class GetUserGithubSuccess implements Action {
    readonly type = GET_GITHUB_USER_SUCCESS;
    constructor( public user: BaseGithubUser) {}
}

export class GetRepositoriesByUser implements Action {
    readonly type = GET_REPOSITORIES_BY_USER;
    constructor( public payload: string) {}
}

export class GetRepositoriesByUserSuccess implements Action {
    readonly type = GET_REPOSITORIES_BY_USER_SUCCESS;
    constructor( public repositories: Repository[]) {}
}

export type usersGithubActions = SetDefaultState
    | GetUsersGithub
    | GetUsersGithubSuccess
    | GetUserGithub
    | GetUserGithubSuccess
    | GetRepositoriesByUser
    | GetRepositoriesByUserSuccess
