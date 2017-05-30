/**
 * Created by bohoffi on 30.05.2017.
 */
import {RequestMethod} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {Base} from './base';
import {Record} from './record';
import {RunAction} from './runaction';
import {Query} from './query';
import {SelectParams} from '../interfaces';

export class Table {

  private _options: {
    tableName?: string;
    tableId?: string;
  };
  private _base: Base;

  constructor(opts: {
    tableName?: string;
    tableId?: string;
  }, base: Base) {

    if (!opts.tableName && !opts.tableId) {
      throw new Error('Table name or table ID is required');
    }

    this._options = opts;
    this._base = base;
  }

  /**
   * Returns the record defined by the given id.
   * @param id
   * @returns {Observable<any>}
   */
  find(id: string): Observable<any> {
    return new Record(id, this).fetch();
  }

  select(params?: SelectParams): Query {
    if (!params) {
      params = {};
    }

    return new Query(params, this);
  }

  /**
   * Creates a new record with the given data.
   * @param entityData
   * @returns {Observable<any>}
   */
  create(entityData: any): Observable<any> {
    return new RunAction({
      base: this.base,
      method: RequestMethod.Post,
      path: this.urlEncodedNameOrId,
      params: {
        api_key: this.base.airtable.options.apiKey
      },
      body: entityData
    })
      .perform();
  }

  /**
   * Updates a record defined by the given id with the given data.
   * @param id
   * @param entityData
   * @returns {Observable<any>}
   */
  update(id: string, entityData: any): Observable<any> {
    return new Record(id, this).patchUpdate(entityData);
  }

  /**
   * Deletes a record defined by the given id.
   * @param id
   * @returns {Observable<any>}
   */
  destroy(id: string): Observable<any> {
    return new Record(id, this).destroy();
  }

  /**
   * Replaces a record defined by the given id with the given data.
   * @param id
   * @param entityData
   * @returns {Observable<any>}
   */
  replace(id: string, entityData: any): Observable<any> {
    return new Record(id, this).putUpdate(entityData);
  }

  get base(): Base {
    return this._base;
  }

  get urlEncodedNameOrId(): string {
    return this._options.tableId || encodeURIComponent(!!this._options.tableName ? this._options.tableName : '');
  }
}
