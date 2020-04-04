import { OperatorFunction, Observable } from 'rxjs';
import { Executioner } from '../interfaces/executioner';
import { switchMap, map, last } from 'rxjs/operators';
import { HttpRequest, HttpEvent, HttpEventType } from '@angular/common/http';

export function execute(): OperatorFunction<Executioner, any> {
    return function executeOperator(source: Observable<Executioner>): Observable<any> {
        return source.pipe(
            switchMap((exec: Executioner) => {
                const request: HttpRequest<any> = new HttpRequest<any>(exec.method,
                    exec.url,
                    exec.body,
                    {
                        headers: exec.headers,
                        params: exec.httpParams
                    });

                return exec.http.request(request)
                    .pipe(
                        map((event: HttpEvent<any>) => {
                            return event.type === HttpEventType.Response ? event.body : null;
                        }),
                        last()
                    );
            })
        );
    };
}
