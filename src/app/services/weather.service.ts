import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 *
 *
 * @export
 * @class WeatherService
 */
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  static URL = 'http://api.openweathermap.org/data/2.5';
  static APPID = '5a4b2d457ecbef9eb2a71e480b947604';
  static ICON_URL = 'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/';
  private currentConditions = [];

  /**
   *
   *
   * @param {string} zipcode
   * @memberof WeatherService
   * @description Here we make a request to get the curretn conditions data from the API.
   * @description Note the use of backticks and an expression to insert the zipcode
   */
  addCurrentConditions(zipcode: string): void {

    this.http.get(`${WeatherService.URL}/weather?zip=${zipcode},us&units=imperial&APPID=${WeatherService.APPID}`)
      .subscribe(data => this.currentConditions.push({ zip: zipcode, data }));
  }

  removeCurrentConditions(zipcode: string) {
    for (const i in this.currentConditions) {
      if (this.currentConditions[i].zip == zipcode) {
        this.currentConditions.splice(+i, 1);
      }
    }
  }

  getCurrentConditions(): any[] {
    return this.currentConditions;
  }

  /**
   *
   *
   * @param {string} zipcode
   * @memberof WeatherService
   * @description Here we make a request to get the curretn conditions data from the API.
   * @description Note the use of backticks and an expression to insert the zipcode
   */
  getForecast(zipcode: string): Observable<any> {
    return this.http.get(`${WeatherService.URL}/forecast/daily?zip=${zipcode},us&units=imperial&cnt=5&APPID=${WeatherService.APPID}`);

  }

  getWeatherIcon(id) {
    if (id >= 200 && id <= 232) {
      return WeatherService.ICON_URL + 'art_storm.png';
    } else if (id >= 501 && id <= 511) {
      return WeatherService.ICON_URL + 'art_rain.png';
    } else if (id === 500 || (id >= 520 && id <= 531)) {
      return WeatherService.ICON_URL + 'art_light_rain.png';
    } else if (id >= 600 && id <= 622) {
      return WeatherService.ICON_URL + 'art_snow.png';
    } else if (id >= 801 && id <= 804) {
      return WeatherService.ICON_URL + 'art_clouds.png';
    } else if (id === 741 || id === 761) {
      return WeatherService.ICON_URL + 'art_fog.png';
    } else {
      return WeatherService.ICON_URL + 'art_clear.png';
    }
  }
}
