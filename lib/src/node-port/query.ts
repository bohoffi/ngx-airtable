/**
 * Created by bohoffi on 30.05.2017.
 */
import {RequestMethod} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/defer';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/merge';

import {SelectParams} from '../interfaces';
import {RunAction} from './runaction';
import {Table} from './table';
import {normalizeQueryParams} from './utils';

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
      method: RequestMethod.Get,
      path: this._table.urlEncodedNameOrId,
      params: normalizeQueryParams(this._params, {
        api_key: this._table.base.airtable.options.apiKey
      })
    })
      .perform()
      .map(result => result.records);
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
      additional['offset'] = offset;
    }

    return Observable.defer(
      () => new RunAction({
        base: this._table.base,
        method: RequestMethod.Get,
        path: this._table.urlEncodedNameOrId,
        params: normalizeQueryParams(this._params, additional)
      })
        .perform()
        .flatMap((result: any) => {
          const items$ = !!previous
            ? previous.merge(Observable.of(result.records))
            : Observable.of(result.records);
          const next$ = !!result.offset
            ? this._eachPage(result.offset, Observable.of(result.records))
            : Observable.empty();

          return items$.merge(next$);
        })
    );
  }

  private _all(offset?: string, previous?: any[]): Observable<any> {
    const additional: any = {
      api_key: this._table.base.airtable.options.apiKey
    };

    if (!!offset) {
      additional['offset'] = offset;
    }

    return Observable.defer(
      () => new RunAction({
        base: this._table.base,
        method: RequestMethod.Get,
        path: this._table.urlEncodedNameOrId,
        params: normalizeQueryParams(this._params, additional)
      })
        .perform()
        .flatMap((result: any) => {
          const items$ = !!previous
            ? Observable.of(previous.concat(result.records))
            : Observable.of(result.records);
          const next$ = !!result.offset
            ? this._all(result.offset, result.records)
            : Observable.empty();

          return items$.merge(next$);
        })
    );
  }
}
