import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromConfig from 'src/app/redux/actions/config.actions';

export interface ConfigState {
    error: boolean;
    theme: string;
}

const initialState: ConfigState = {
    error: false,
    theme: 'light'
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
        case fromConfig.SET_THEME:
            return {
                ...state,
                theme: action.payload
            }
        default:
            return state;
    }
}

export const getConfigState = createFeatureSelector<ConfigState>('config');
export const getError = createSelector(getConfigState, (state: ConfigState) => state.error);
export const getTheme = createSelector(getConfigState, (state: ConfigState) => state.theme);
