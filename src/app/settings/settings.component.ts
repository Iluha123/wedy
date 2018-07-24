import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {ApiService} from '../shared/services/api.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  options: FormGroup;

  countries: Array<any> = [{
    id: 1,
    value: 'Select Country'
  }];

  weathers: Array<any> = [{
    id: 1,
    value: 'sun',
    iconPath: ''
  }, {
    id: 2,
    value: 'snow',
    iconPath: ''
  }, {
    id: 3,
    value: 'rain',
    iconPath: ''
  }, {
    id: 4,
    value: 'cloud',
    iconPath: ''
  }];

  temperatures: Array<any> = [{
    id: 1,
    value: '-15..-5'
  }, {
    id: 2,
    value: '-5..5'
  }, {
    id: 2,
    value: '5..15'
  }, {
    id: 3,
    value: '15..25'
  }, {
    id: 4,
    value: '25..35'
  }];

  constructor(private fb: FormBuilder, private api: ApiService) {
    this.options = fb.group({
      color: 'primary',
      country: 0,
      temperature: 0,
      weather: 0,
      fontSize: [16, Validators.min(10)],
    });
  }

  getFontSize() {
    return Math.max(10, this.options.value.fontSize);
  }

  ngOnInit() {
    console.log('OME');
    this.api.getListCountries()
      .subscribe((response: Array<any>) => {
        this.countries = response;
      });
  }

}
