import { Action } from '@ngrx/store';

export const SET_ERROR = '[Error] Error API'
export const DEFAULT_ERROR = '[Error] Restore state Error API'
export const SET_THEME = '[Theme] Set theme layout'

export class SetError implements Action {
  readonly type = SET_ERROR;
}

export class SetDefaultErrorState implements Action {
  readonly type = DEFAULT_ERROR;
}

export class SetTheme implements Action {
  readonly type = SET_THEME;
  constructor( public payload: string) {}
}

export type configActions =
    | SetError
    | SetDefaultErrorState
    | SetTheme