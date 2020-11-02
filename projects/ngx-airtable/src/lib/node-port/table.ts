/**
 * Created by bohoffi on 30.05.2017.
 */
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Base } from './base';
import { SelectParams, TableOptions } from '../interfaces';
import { Record } from './record';
import { RunAction } from './runaction';
import { Query } from './query';

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
   */
  find(id: string): Observable<any> {
    return new Record(id, this).fetch();
  }

  /**
   * Creates a new Query instance with the given parameters.
   */
  select(params?: SelectParams): Query {
    if (!params) {
      params = {};
    }

    return new Query(params, this);
  }

  /**
   * Creates a new record with the given data.
   */
  create(entityData: any): Observable<any> {
    return new RunAction({
      base: this.base,
      method: 'POST',
      path: this.urlEncodedNameOrId,
      params: new HttpParams({
        fromObject: {
          api_key: this.base.airtable.options.apiKey
        }
      }),
      body: entityData
    })
      .perform();
  }

  /**
   * Updates a record defined by the given id with the given data.
   */
  update(id: string, entityData: any): Observable<any> {
    return new Record(id, this).patchUpdate(entityData);
  }

  /**
   * Deletes a record defined by the given id.
   */
  destroy(id: string): Observable<any> {
    return new Record(id, this).destroy();
  }

  /**
   * Replaces a record defined by the given id with the given data.
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
