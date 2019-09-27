import { Action } from '@ngrx/store';
import { ZipCodeActionTypes, ZipCodeActions } from '../actions/zip-code.actions';


export const zipCodeFeatureKey = 'zipCode';

export interface ZipcodeState {
  zipcodes: string[];
}

export const initialZipcodeState: ZipcodeState = {
  zipcodes: []
};

export function zipcodeReducer(state = initialZipcodeState, action: ZipCodeActions): ZipcodeState {
  switch (action.type) {
    case ZipCodeActionTypes.AddZipcode:
      return { ...state, zipcodes: [...state.zipcodes, action.zipcode] };
    case ZipCodeActionTypes.RemoveZipcode:
      return { ...state, zipcodes: state.zipcodes.filter(zip => zip !== action.zipcode) };
    default:
      return state;
  }
}
