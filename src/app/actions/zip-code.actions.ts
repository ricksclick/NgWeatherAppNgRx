import { Action } from '@ngrx/store';

export enum ZipCodeActionTypes {
  AddZipcode = '[Zipcode] Add ZipCodes',
  RemoveZipcode = '[Zipcode] Remove ZipCodes',
}

export class AddZipcode implements Action {
  readonly type = ZipCodeActionTypes.AddZipcode;
  constructor(public zipcode: string) { }
}

export class RemoveZipcode implements Action {
  readonly type = ZipCodeActionTypes.RemoveZipcode;
  constructor(public zipcode: string) { }
}


export type ZipCodeActions = AddZipcode | RemoveZipcode;
