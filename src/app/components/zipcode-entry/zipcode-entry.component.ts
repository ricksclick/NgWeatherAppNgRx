import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html',
  styleUrls: ['./zipcode-entry.component.scss']
})
export class ZipcodeEntryComponent implements OnInit {


  // tslint:disable-next-line: variable-name
  constructor(private _location: LocationService) { }

  addLocation(zipcode: string) {
    this._location.addLocation(zipcode);
  }
  ngOnInit(): void {
  }
}
