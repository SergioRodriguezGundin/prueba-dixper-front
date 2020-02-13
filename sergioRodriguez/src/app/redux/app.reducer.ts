import { ActionReducerMap } from '@ngrx/store'
import * as reducers from 'src/app/redux/reducers';

export interface AppState {
    config: reducers.ConfigState;
    users: reducers.UsersState;
};

export const appReducers: ActionReducerMap<AppState> = {
    config: reducers.configReducer,
    users: reducers.usersReducer
};