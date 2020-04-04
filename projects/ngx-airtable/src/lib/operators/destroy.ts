import { Executioner } from '../interfaces/executioner';
import { OperatorFunction, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { normalizeQueryParams } from '../utils/normalize-query-params';

export function destroy(data: string | string[]): OperatorFunction<Executioner, Executioner> {
    return function destroyOperator(source: Observable<Executioner>): Observable<Executioner> {

        if (!data || (Array.isArray(data) && !data.length)) {
            throw new Error('Data to destroy is required');
        }

        return source.pipe(map<Executioner, Executioner>((exec: Executioner) => {

            // single record
            if (!Array.isArray(data)) {
                return {
                    ...exec,
                    ...{
                        method: 'DELETE',
                        url: `${exec.url}/${data}`
                    }
                };
            }

            // array of records
            return {
                ...exec,
                ...{
                    method: 'DELETE',
                    httpParams: normalizeQueryParams(null, {
                        records: data
                    })
                }
            };
        }));
    };
}
