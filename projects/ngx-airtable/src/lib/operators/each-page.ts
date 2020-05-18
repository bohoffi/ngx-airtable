import { OperatorFunction, Observable } from 'rxjs';
import { Executioner } from '../interfaces/executioner';

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

// TODO
export function eachPage(): OperatorFunction<Executioner, Executioner> {
  return function findOperation(source: Observable<Executioner>): Observable<Executioner> {
    return source;
  };
}
