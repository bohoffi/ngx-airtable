import { map } from 'rxjs/operators';

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

  // firstPage(): Observable<any> {
  firstPage(): RunAction {
    return new RunAction({
      base: null,
      // base: this._table.base,
      method: 'GET',
      path: this._table.urlEncodedNameOrId,
      params: normalizeQueryParams(this._params)
    })
      // .perform()
      .pipe(
        map(result => {
          return result.records;
        })
      );
  }

  // eachPage(): RunAction {
  // // eachPage(): Observable<any> {
  //   return this._eachPage();
  // }

  // all(): Observable<any> {
  //   return this._all();
  // }

  // private _eachPage(offset?: string, previous?: Observable<any>): RunAction {
  //   // private _eachPage(offset?: string, previous?: Observable<any>): Observable<any> {
  //   const additional: any = {};

  //   if (!!offset) {
  //     additional['offset'] = offset;
  //   }

  //   // return defer(
  //   //   () => new RunAction({
  //   return new RunAction({
  //     base: null,
  //     // base: this._table.base,
  //     method: 'GET',
  //     path: this._table.urlEncodedNameOrId,
  //     params: normalizeQueryParams(this._params, additional),
  //   })
  //     // .perform()
  //     .pipe(
  //       flatMap((result: any) => {
  //         const items$ = !!previous
  //           ? merge(previous, of(result.records))
  //           : of(result.records);
  //         const next$ = !!result.offset
  //           ? this._eachPage(result.offset, of(result.records))
  //           : EMPTY;

  //         return merge(items$, next$);
  //       })
  //     );
  //   // );
  // }

  // private _all(offset?: string, previous?: any[]): Observable<any> {
  //   const additional: any = {};

  //   if (!!offset) {
  //     additional['offset'] = offset;
  //   }

  //   return defer(
  //     () => new RunAction({
  //       base: null,
  //       // base: this._table.base,
  //       method: 'GET',
  //       path: this._table.urlEncodedNameOrId,
  //       params: normalizeQueryParams(this._params, additional)
  //     })
  //       .perform()
  //       .pipe(
  //         flatMap((result: any) => {
  //           const items$ = !!previous
  //             ? concat(of(previous), result.records)
  //             : of(result.records);
  //           const next$ = !!result.offset
  //             ? this._all(result.offset, result.records)
  //             : EMPTY;

  //           return merge(items$, next$);
  //         })
  //       )
  //   );
  // }
}
