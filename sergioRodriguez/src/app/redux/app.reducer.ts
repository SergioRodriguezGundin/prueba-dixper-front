import { ActionReducerMap } from '@ngrx/store'
import * as reducers from 'src/app/redux/reducers';

export interface AppState {
    users: reducers.UsersState;
};

export const appReducers: ActionReducerMap<AppState> = {
    users: reducers.usersReducer
};