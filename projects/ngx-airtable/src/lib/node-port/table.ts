/**
 * Created by bohoffi on 30.05.2017.
 */
import {HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Base} from './base';
import {SelectParams, TableOptions} from '../interfaces';
import {Record} from './record';
import {RunAction} from './runaction';
import {Query} from './query';
import {normalizeQueryParams} from './utils';

export class Table {

  protected _options: TableOptions;
  protected _base: Base;

  constructor(opts: TableOptions, base: Base) {

    if (!opts.tableName && !opts.tableId) {
      throw new Error('Table name or table ID is required');
    }

    this._options = opts;
    this._base = base;
  }

  /**
   * Returns the record defined by the given id.
   * @param id
   * @returns
   */
  find(id: string): Observable<any> {
    return new Record(id, this).fetch();
  }

  /**
   * Creates a new Query instance with the given parameters.
   * @param params
   * @returns
   */
  select(params?: SelectParams): Query {
    if (!params) {
      params = {};
    }

    return new Query(params, this);
  }

  /**
   * Creates a new record with the given data.
   * @param entityData
   * @returns
   */
  create(entityData: any): Observable<any> {
    return new RunAction({
      base: this.base,
      method: 'POST',
      path: this.urlEncodedNameOrId,
      params: normalizeQueryParams({}),
      headers: new HttpHeaders({authorization: `Bearer ${this.base.airtable.options.apiKey}`}),
      body: entityData
    })
      .perform();
  }

  /**
   * Updates a record defined by the given id with the given data.
   * @param id
   * @param entityData
   * @returns
   */
  update(id: string, entityData: any): Observable<any> {
    return new Record(id, this).patchUpdate(entityData);
  }

  /**
   * Deletes a record defined by the given id.
   * @param id
   * @returns
   */
  destroy(id: string): Observable<any> {
    return new Record(id, this).destroy();
  }

  /**
   * Replaces a record defined by the given id with the given data.
   * @param id
   * @param entityData
   * @returns
   */
  replace(id: string, entityData: any): Observable<any> {
    return new Record(id, this).putUpdate(entityData);
  }

  get options(): TableOptions {
    return this._options;
  }

  get base(): Base {
    return this._base;
  }

  get urlEncodedNameOrId(): string {
    return this._options.tableId || encodeURIComponent(!!this._options.tableName ? this._options.tableName : '');
  }
}
