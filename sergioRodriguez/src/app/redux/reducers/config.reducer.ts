import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromConfig from 'src/app/redux/actions/config.actions';

export interface ConfigState {
    error: boolean;
}

const initialState: ConfigState = {
    error: false
}

export function configReducer(state = initialState, action: fromConfig.configActions): ConfigState {
    switch (action.type) {
        case fromConfig.SET_ERROR:
            return {
                ...state,
                error: true
            }
        case fromConfig.DEFAULT_ERROR:
            return {
                ...state,
                error: false
            }
        default:
            return state;
    }
}

export const getConfigState = createFeatureSelector<ConfigState>('config');
export const getError = createSelector(getConfigState, (state: ConfigState) => state.error);
