/**
 * Created by bohoffi on 30.05.2017.
 */
import { Base } from './base';
import { AirtableConfiguration } from '../interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const defaultOptions: AirtableConfiguration = {
  endpointUrl: 'https://api.airtable.com',
  apiVersion: 0
};

@Injectable({
  providedIn: 'root'
})
export class Airtable {

  private _options: AirtableConfiguration;

  constructor(public http: HttpClient,
    _config?: AirtableConfiguration) {
    this._options = Object.assign(defaultOptions, _config);
  }

  configure(opts: AirtableConfiguration): Airtable {
    this._options = Object.assign(this._options, opts);
    this._checkConfiguration();

    return this;
  }

  base(baseId: string): Base {
    this._checkConfiguration();
    return new Base(baseId, this);
  }

  get options(): AirtableConfiguration {
    return this._options;
  }

  private _checkConfiguration(): void {
    if (!this._options.apiKey) {
      throw new Error('API key is required to connect to Airtable');
    }
  }
}
