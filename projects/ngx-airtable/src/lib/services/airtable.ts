import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { AirtableConfiguration } from '../interfaces/airtable-configuration';
import { NGX_AIRTABLE_CONFIG } from '../token/ngx-airtable-configuration';
import { Observable, of } from 'rxjs';
import { Executioner } from '../interfaces/executioner';
import { TableOptions } from '../interfaces/table-options';
import { base } from '../operators/base';
import { table } from '../operators/table';

const defaultOptions: Partial<AirtableConfiguration> = {
  endpointUrl: 'https://api.airtable.com',
  apiVersion: 0
};

@Injectable({
  providedIn: 'root'
})
export class Airtable {

  constructor(
    private readonly http: HttpClient,
    @Inject(NGX_AIRTABLE_CONFIG) private readonly config: AirtableConfiguration
  ) {
    this.config = { ...defaultOptions, ...this.config };
    this.checkConfiguration();
  }

  /**
   * Creates a new Airtable executioner with optional set base and table.
   * @param baseId base id to bind to the executioner
   * @param tableOptions table to bind to the executioner
   */
  public build(baseId?: string, tableOptions?: TableOptions): Observable<Executioner> {

    const headers = {
      ...{
        authorization: `Bearer ${this.config.apiKey}`
      }
    };

    let airtableObs = of<Executioner>({
      http: this.http,
      url: `${this.config.endpointUrl}/v${this.config.apiVersion}`,
      headers: new HttpHeaders(headers)
    });

    if (!!baseId) {
      airtableObs = airtableObs.pipe(base(baseId));
    }

    if (tableOptions) {
      airtableObs = airtableObs.pipe(table(tableOptions));
    }

    return airtableObs;
  }

  private checkConfiguration(): void {
    if (!this.config.apiKey) {
      throw new Error('API key is required to connect to Airtable');
    }
  }
}
