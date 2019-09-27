import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { LocationService } from 'src/app/services/location.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { RemoveZipcode } from 'src/app/actions/zip-code.actions';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {

  // tslint:disable: variable-name
  private _zipcodes: string[] = [];
  private _currentConditions: Map<string, any>;

  constructor(
    private router: Router,
    private _store: Store<State>,
    private _weatherService: WeatherService) {

    this._store.select(state => state.zipcodes)
      .subscribe(zips => this._zipcodes = zips.zipcodes);

    this._store.select(state => state.currentConditions)
      .subscribe(currentConditions => this._currentConditions = currentConditions.currentConditions);

  }
  ngOnInit() { }

  getConditions(zip: string) {
    console.log(this._currentConditions.get(zip));
    return this._currentConditions ? this._currentConditions.get(zip) : null;
  }

  showForecast(zipcode: string) {
    this.router.navigate(['/forecast', zipcode]);
  }

  removeZip(zip: string) {
    this._store.dispatch(new RemoveZipcode(zip));
  }

  imgUrl(weatherData: any) {
    return this._weatherService.getWeatherIcon(weatherData.weather[0].id);
  }

  get zipcodes() {
    return this._zipcodes;
  }

}
