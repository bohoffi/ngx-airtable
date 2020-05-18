import { Executioner } from '../interfaces/executioner';
import { OperatorFunction, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export function create(data: any): OperatorFunction<Executioner, Executioner> {
    return function createOperator(source: Observable<Executioner>): Observable<Executioner> {

        if (!data) {
            throw new Error('Data to create is required');
        }

        return source.pipe(map<Executioner, Executioner>((exec: Executioner) => {
            return {
                ...exec,
                ...{
                    method: 'POST',
                    body: data
                }
            };
        }));
    };
}
