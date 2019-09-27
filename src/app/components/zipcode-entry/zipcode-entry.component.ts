import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { AddZipcode } from 'src/app/actions/zip-code.actions';

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html',
  styleUrls: ['./zipcode-entry.component.scss']
})
export class ZipcodeEntryComponent implements OnInit {


  // tslint:disable-next-line: variable-name
  constructor(private _location: LocationService, private _store: Store<State>) { }

  addLocation(zipcode: string) {
    console.log('add location');
    // this._location.addLocation(zipcode);
    this._store.dispatch(new AddZipcode(zipcode));
  }
  ngOnInit(): void {
  }
}
