import { Action } from '@ngrx/store';
import { BaseGithubUser } from '../models/user.model';
import { Repository } from '../models/repository.model';

export const GET_GITHUB_USERS = '[Users Github] Get users'
export const GET_GITHUB_USERS_SUCCESS = '[Users Github] Get users success'
export const GET_GITHUB_USERS_ERROR = '[Users Github] Get users error'

export const GET_GITHUB_USER = '[User Github] Get user'
export const GET_GITHUB_USER_SUCCESS = '[User Github] Get user success'
export const GET_GITHUB_USER_ERROR = '[User Github] Get user error'

export const GET_REPOSITORIES_BY_USER = '[Repos Github] Get repositories by user'
export const GET_REPOSITORIES_BY_USER_SUCCESS = '[Repos Github] Get repositories by user success'
export const GET_REPOSITORIES_BY_USER_ERROR = '[User Github] Get repositories by user error'

export class GetUsersGithub implements Action {
    readonly type = GET_GITHUB_USERS;
    constructor( public payload: string) {}
}

export class GetUsersGithubSuccess implements Action {
    readonly type = GET_GITHUB_USERS_SUCCESS;
    constructor( public users: BaseGithubUser[]) {}
}

export class GetUsersGithubError implements Action {
    readonly type = GET_GITHUB_USERS_ERROR;
}

export class GetUserGithub implements Action {
    readonly type = GET_GITHUB_USER;
    constructor( public payload: string) {}
}

export class GetUserGithubSuccess implements Action {
    readonly type = GET_GITHUB_USER_SUCCESS;
    constructor( public user: BaseGithubUser) {}
}

export class GetUserGithubError implements Action {
    readonly type = GET_GITHUB_USER_ERROR;
}

export class GetRepositoriesByUser implements Action {
    readonly type = GET_REPOSITORIES_BY_USER;
    constructor( public payload: string) {}
}

export class GetRepositoriesByUserSuccess implements Action {
    readonly type = GET_REPOSITORIES_BY_USER_SUCCESS;
    constructor( public repositories: Repository[]) {}
}

export class GetRepositoriesByUserError implements Action {
    readonly type = GET_REPOSITORIES_BY_USER_ERROR;
}

export type usersGithubActions = GetUsersGithub
    | GetUsersGithubSuccess
    | GetUsersGithubError
    | GetUserGithub
    | GetUserGithubSuccess
    | GetUserGithubError
    | GetRepositoriesByUser
    | GetRepositoriesByUserSuccess
    | GetRepositoriesByUserError
