import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromUsers from 'src/app/redux/actions/users.actions';
import { BaseGithubUser } from '../models/user.model';
import { Repository } from '../models/repository.model';

export interface UsersState {
    githubUsers: {
        data: BaseGithubUser[];
        loading: boolean;
    },
    selected: {
        user: BaseGithubUser;
        loading: boolean;
        error: boolean;
        repositories: {
            data: Repository[];
            loading: boolean;
        }
    };
    error: boolean;
}

const initialState: UsersState = {
    githubUsers: {
        data: [],
        loading: false,
    },
    selected: {
        user: null,
        loading: false,
        error: false,
        repositories: {
            data: null,
            loading: false,
        },
    },
    error: false
}

export function usersReducer(state = initialState, action: fromUsers.usersGithubActions): UsersState {
    switch (action.type) {
        case fromUsers.SET_DEFAULT_STATE:
            return {
                ...initialState
            }
        case fromUsers.GET_GITHUB_USERS:
            return {
                ...state,
                githubUsers: {
                    data: [],
                    loading: true,
                }
            };
        case fromUsers.GET_GITHUB_USERS_SUCCESS:
            return {
                ...state,
                githubUsers: {
                    ...state.githubUsers,
                    data: action.users,
                    loading: false
                },
            };
        case fromUsers.GET_GITHUB_USER:
            return {
                ...state,
                selected: {
                    ...state.selected,
                    user: null,
                    loading: true,
                    error: false
                }
            };
        case fromUsers.GET_GITHUB_USER_SUCCESS:
            return {
                ...state,
                selected: {
                    ...state.selected,
                    user: action.user,
                    loading: false,
                },
            };
        case fromUsers.GET_REPOSITORIES_BY_USER:
            return {
                ...state,
                selected: {
                    ...state.selected,
                    repositories: {
                        ...state.selected.repositories,
                        loading: true,
                    }
                }
            }    
        case fromUsers.GET_REPOSITORIES_BY_USER_SUCCESS:
            return {
                ...state,
                selected: {
                    ...state.selected,
                    user: {
                        ...state.selected.user,
                        repositories: action.repositories
                    },
                    repositories: {
                        ...state.selected.repositories,
                        data: action.repositories,
                        loading: false
                    },
                },
            };
        default:
            return state;
    }
}

export const getUsersState = createFeatureSelector<UsersState>('users');
export const getGithubUsers = createSelector(getUsersState, (state: UsersState) => state.githubUsers.data);
export const getSelectedUser = createSelector(getUsersState, (state: UsersState) => state.selected.user);
export const getUserRepositories = createSelector(getUsersState, (state: UsersState) => state.selected.repositories.data);

export const getLoadingGithubUsers = createSelector(getUsersState, (state: UsersState) => state.githubUsers.loading);
export const getLoadingSelectedUser = createSelector(getUsersState, (state: UsersState) => state.selected.loading);
export const getLoadingRepositories = createSelector(getUsersState, (state: UsersState) => state.selected.repositories.loading);
