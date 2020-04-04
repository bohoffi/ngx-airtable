import { SelectParams } from '../interfaces/select-params';
import { OperatorFunction, Observable, Operator, Subscriber, TeardownLogic } from 'rxjs';
import { Executioner } from '../interfaces/executioner';
import { normalizeQueryParams } from '../utils/normalize-query-params';

class SelectSubscriber extends Subscriber<Executioner> {

    constructor(destination: Subscriber<Executioner>, private readonly params: SelectParams) {
        super(destination);
    }

    protected _next(exec: Executioner) {
        let result: Executioner;
        try {
            result = {
                ...exec,
                ...{
                    method: 'GET',
                    httpParams: normalizeQueryParams(this.params)
                }
            };
        } catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    }
}

class SelectOperator implements Operator<Executioner, Executioner> {

    constructor(private readonly params: SelectParams) { }

    public call(subscriber: Subscriber<Executioner>, source: any): TeardownLogic {
        return source.subscribe(new SelectSubscriber(subscriber, this.params));
    }
}

export function select(params: SelectParams): OperatorFunction<Executioner, Executioner> {
    return function selectOperator(source: Observable<Executioner>): Observable<Executioner> {
        return source.lift(new SelectOperator(params));
    };
}

