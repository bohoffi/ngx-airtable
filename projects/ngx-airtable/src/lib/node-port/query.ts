/**
 * Created by bohoffi on 30.05.2017.
 */
import { HttpParams } from '@angular/common/http';
import { defer, EMPTY, merge, Observable, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { SelectParams } from '../interfaces';
import { RunAction } from './runaction';
import { Table } from './table';
import { normalizeQueryParams } from './utils';

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
      params: new HttpParams({
        fromObject: normalizeQueryParams(this._params, {
          api_key: this._table.base.airtable.options.apiKey
        })
      })
    })
      .perform()
      .pipe(
        map(result => result.records)
      );
  }

  eachPage(): Observable<any> {
    return this._eachPage();
  }

  all(): Observable<any> {
    return this._all();
  }

  private _eachPage(offset?: string, previous?: Observable<any>): Observable<any> {
    const additional: any = {
      api_key: this._table.base.airtable.options.apiKey
    };

    if (!!offset) {
      additional.offset = offset;
    }

    return defer(
      () => new RunAction({
        base: this._table.base,
        method: 'GET',
        path: this._table.urlEncodedNameOrId,
        params: new HttpParams({
          fromObject: normalizeQueryParams(this._params, additional)
        })
      })
        .perform()
        .pipe(
          mergeMap((result: any) => {
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
    const additional: any = {
      api_key: this._table.base.airtable.options.apiKey
    };

    if (!!offset) {
      additional.offset = offset;
    }

    return defer(
      () => new RunAction({
        base: this._table.base,
        method: 'GET',
        path: this._table.urlEncodedNameOrId,
        params: new HttpParams({
          fromObject: normalizeQueryParams(this._params, additional)
        })
      })
        .perform()
        .pipe(
          mergeMap((result: any) => {
            const items$ = !!previous
              ? of(previous.concat(result.records))
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
