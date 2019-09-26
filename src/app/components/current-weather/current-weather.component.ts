import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { LocationService } from 'src/app/services/location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {

  constructor(private weatherService: WeatherService, private locationService: LocationService, private router: Router) {
  }
  ngOnInit() { }

  getCurrentConditions() {
    return this.weatherService.getCurrentConditions();
  }

  showForecast(zipcode: string) {
    this.router.navigate(['/forecast', zipcode]);
  }

}
