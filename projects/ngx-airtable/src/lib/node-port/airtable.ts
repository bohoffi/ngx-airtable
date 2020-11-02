/**
 * Created by bohoffi on 30.05.2017.
 */
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { Base } from './base';
import { AirtableConfiguration } from '../interfaces';
import { AirtableConfigToken } from '../tokens';

const defaultOptions: Partial<AirtableConfiguration> = {
  endpointUrl: 'https://api.airtable.com',
  apiVersion: 0
};

@Injectable({
  providedIn: 'root'
})
export class Airtable {

  private _options: AirtableConfiguration;

  constructor(
    public readonly http: HttpClient,
    @Inject(AirtableConfigToken) private readonly config?: AirtableConfiguration
  ) {
    this._options = Object.assign(defaultOptions, this.config);
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
