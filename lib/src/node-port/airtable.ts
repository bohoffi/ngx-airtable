/**
 * Created by bohoffi on 30.05.2017.
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Base} from './base';

@Injectable()
export class Airtable {

  private _options: {
    apiKey: string;
    endpointUrl?: string;
    apiVersion?: number;
  };

  constructor(public http: Http) {
  }

  configure(opts: {
    apiKey: string;
    endpointUrl?: string;
    apiVersion?: number;
  }): Airtable {
    if (!opts.apiKey) {
      throw new Error('API key is required to connect to Airtable');
    }
    this._options = opts;

    return this;
  }

  base(baseId: string): Base {
    return new Base(baseId, this);
  }

  get options(): {
    apiKey: string;
    endpointUrl?: string;
    apiVersion?: number;
  } {
    return this._options;
  }
}
