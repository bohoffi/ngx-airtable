import { Executioner } from '../interfaces/executioner';
import { OperatorFunction, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export function replace(data: any): OperatorFunction<Executioner, Executioner> {
    return function replaceOperator(source: Observable<Executioner>): Observable<Executioner> {

        if (!data) {
            throw new Error('Data to replace is required');
        }

        return source.pipe(map<Executioner, Executioner>((exec: Executioner) => {
            return {
                ...exec,
                ...{
                    method: 'PUT',
                    body: data
                }
            };
        }));
    };
}
