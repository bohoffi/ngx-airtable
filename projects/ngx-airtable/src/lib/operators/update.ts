import { Executioner } from '../interfaces/executioner';
import { OperatorFunction, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export function update(data: any): OperatorFunction<Executioner, Executioner> {
    return function updateOperator(source: Observable<Executioner>): Observable<Executioner> {

        if (!data) {
            throw new Error('Data to update is required');
        }

        return source.pipe(map<Executioner, Executioner>((exec: Executioner) => {
            return {
                ...exec,
                ...{
                    method: 'PATCH',
                    body: data
                }
            };
        }));
    };
}
