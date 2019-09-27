import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { ZipcodeState, zipcodeReducer } from './zip-code.reducer';
import { CurrentConditionsState, currentConditionsReducer } from './current-conditions.reducer';


export interface State {
  zipcodes: ZipcodeState;
  currentConditions: CurrentConditionsState;
}

export const reducers: ActionReducerMap<State> = {
  zipcodes: zipcodeReducer,
  currentConditions: currentConditionsReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
