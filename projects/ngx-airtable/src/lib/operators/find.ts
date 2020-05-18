import { OperatorFunction, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Executioner } from '../interfaces/executioner';

/**
 * Defines a find operator
 */
export function find(id: string): OperatorFunction<Executioner, Executioner> {
    return function findOperation(source: Observable<Executioner>): Observable<Executioner> {
        return source.pipe(map<Executioner, Executioner>((exec: Executioner) => {

            if (!exec.table) {
                throw new Error('You need to define a table first');
            }

            return {
                ...exec,
                ...{
                    method: 'GET',
                    table: `${exec.table}/${id}`
                }
            };
        }));
    };
}
