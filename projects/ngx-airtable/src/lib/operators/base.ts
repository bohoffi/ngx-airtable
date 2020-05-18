import { OperatorFunction, Observable } from 'rxjs';
import { Executioner } from '../interfaces/executioner';
import { map } from 'rxjs/operators';

export function base(baseId: string): OperatorFunction<Executioner, Executioner> {
    return function findOperation(source: Observable<Executioner>): Observable<Executioner> {
        return source.pipe(map<Executioner, Executioner>((exec: Executioner) => {

            if (exec.base) {
                throw new Error('You already defined a base');
            }

            return {
                ...exec,
                ...{
                    base: baseId,
                    url: `${exec.url}`
                }
            };
        }));
    };
}
