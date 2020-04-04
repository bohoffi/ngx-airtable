import { OperatorFunction, Observable } from 'rxjs';
import { Executioner } from '../interfaces/executioner';

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

// TODO
export function all(): OperatorFunction<Executioner, Executioner> {
  return function findOperation(source: Observable<Executioner>): Observable<Executioner> {
    return source;
  };
}
