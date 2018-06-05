/**
 * Created by bohoffi on 30.05.2017.
 */
import {Observable, defer, of, EMPTY, merge, concat} from 'rxjs';
import {flatMap, map} from 'rxjs/operators';

import {SelectParams} from '../interfaces';
import {RunAction} from './runaction';
import {Table} from './table';
import {normalizeQueryParams} from './utils';
import {HttpHeaders} from '@angular/common/http';

export class Query {

  private _params: SelectParams;
  private _table: Table;

  constructor(params: SelectParams, table: Table) {
    this._params = params;
    this._table = table;
  }

  firstPage(): Observable<any> {
    return new RunAction({
      base: this._table.base,
      method: 'GET',
      path: this._table.urlEncodedNameOrId,
      params: normalizeQueryParams(this._params),
      headers: new HttpHeaders({authorization: `Bearer ${this._table.base.airtable.options.apiKey}`})
    })
      .perform()
      .pipe(
        map(result => {
          return result.records;
        })
      );
  }

  eachPage(): Observable<any> {
    return this._eachPage();
  }

  all(): Observable<any> {
    return this._all();
  }

  private _eachPage(offset?: string, previous?: Observable<any>): Observable<any> {
    const additional: any = {};

    if (!!offset) {
      additional['offset'] = offset;
    }

    return defer(
      () => new RunAction({
        base: this._table.base,
        method: 'GET',
        path: this._table.urlEncodedNameOrId,
        params: normalizeQueryParams(this._params, additional),
        headers: new HttpHeaders({authorization: `Bearer ${this._table.base.airtable.options.apiKey}`})
      })
        .perform()
        .pipe(
          flatMap((result: any) => {
            const items$ = !!previous
              ? merge(previous, of(result.records))
              : of(result.records);
            const next$ = !!result.offset
              ? this._eachPage(result.offset, of(result.records))
              : EMPTY;

            return merge(items$, next$);
          })
        )
    );
  }

  private _all(offset?: string, previous?: any[]): Observable<any> {
    const additional: any = {};

    if (!!offset) {
      additional['offset'] = offset;
    }

    return defer(
      () => new RunAction({
        base: this._table.base,
        method: 'GET',
        path: this._table.urlEncodedNameOrId,
        params: normalizeQueryParams(this._params, additional),
        headers: new HttpHeaders({authorization: `Bearer ${this._table.base.airtable.options.apiKey}`})
      })
        .perform()
        .pipe(
          flatMap((result: any) => {
            const items$ = !!previous
              ? concat(of(previous), result.records)
              : of(result.records);
            const next$ = !!result.offset
              ? this._all(result.offset, result.records)
              : EMPTY;

            return merge(items$, next$);
          })
        )
    );
  }
}
