import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {ApiService} from '../shared/services/api.service';
import {GlobalDataService} from '../shared/services/globalData.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  settingsForm: FormGroup;

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
  }, {
    id: 5,
    value: 'storm',
    iconPath: ''
  }, {
    id: 6,
    value: 'wind',
    iconPath: ''
  }];

  temperatures: Array<any> = [{
    id: 1,
    value: '-15..-5'
  }, {
    id: 2,
    value: '-5..5'
  }, {
    id: 3,
    value: '5..15'
  }, {
    id: 4,
    value: '15..25'
  }, {
    id: 5,
    value: '25..35'
  }];
  valueTest: string;

  // selected: any = {};

  constructor(private fb: FormBuilder, private api: ApiService, private dataS: GlobalDataService) {
    this.settingsForm = fb.group({
      color: 'primary'
    });

    this.selected = this.dataS.get();
  }

  ngOnInit() {
    console.log('OME');
    this.api.getListCountries()
      .subscribe((response: Array<any>) => {
        this.countries = response;
      });
  }

  changeCountry(value: any, key: string) {
    this.selected[key] = value;
    this.dataS.set(this.selected);
  }

}
