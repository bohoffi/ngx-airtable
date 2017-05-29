/**
 * Created by bohoffi on 29.05.2017.
 */
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {ModuleConfig} from '../interfaces';
import {AIRTABLE_BASE_URL} from '../utils/constants';

@Injectable()
export class AirtableService {

  constructor(private _config: ModuleConfig,
              private _http: Http) {
  }

  get(table: string): Observable<any> {

    if (!this._checkConfig(table)) {
      throw new Error(`There is no configured table (neither alias or value) with the name '${table}'`);
    }

    return this._http
      .get(this._buildUrl(table))
      .map((response: Response) => response.json());
  }

  private _checkConfig(table: string): boolean {
    return Object.keys(this._config.tables)
        .some((alias: string) => alias === table)
      || Object.keys(this._config.tables)
        .map((alias: string) => this._config.tables[alias])
        .some((value: string) => value === table);
  }

  private _buildUrl(table: string): string {
    return `${AIRTABLE_BASE_URL}${this._config.base}/${this._getTableByAliasOrValue(table)}?api_key=${this._config.apiKey}`;
  }

  private _getTableByAliasOrValue(table: string): string | undefined {
    const matchedAlias = Object.keys(this._config.tables).find((alias: string) => alias === table);

    if (!!matchedAlias) {
      return this._config.tables[table];
    }

    return Object.keys(this._config.tables)
      .map((alias: string) => this._config.tables[alias])
      .find((value: string) => value === table);
  }
}
