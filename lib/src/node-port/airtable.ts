/**
 * Created by bohoffi on 30.05.2017.
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Base} from './base';
import {AirtableConfiguration} from '../interfaces';

const defaultOptions: AirtableConfiguration = {
  endpointUrl: 'https://api.airtable.com',
  apiVersion: 0
};

@Injectable()
export class Airtable {

  private _options: AirtableConfiguration;

  constructor(public http: Http) {
    this._options = defaultOptions;
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
