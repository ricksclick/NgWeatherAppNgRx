import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { ZipCodeActionTypes } from '../actions/zip-code.actions';
import { mergeMap, map, catchError, retry } from 'rxjs/operators';
import { WeatherService } from '../services/weather.service';
import { CurrentConditionsLoaded, CurrentConditionsLoadFailed } from '../actions/current-conditions.actions';



@Injectable()
export class CurrentConditionsEffects {

  constructor(private actions$: Actions, private _weatherSvc: WeatherService) { }

  @Effect()
  loadCurrentConditions$: Observable<any> = this.actions$.pipe(
    ofType(ZipCodeActionTypes.AddZipcode),
    mergeMap(action =>
      this._weatherSvc.loadCurrentConditions(action['zipcode']).pipe(
        map(data => new CurrentConditionsLoaded(action['zipcode'], data)),
        retry(2),
        catchError(err => of(new CurrentConditionsLoadFailed(action['zipcode'], err))))
    ));
}
