import { OperatorFunction, Observable } from 'rxjs';
import { Executioner } from '../interfaces/executioner';
import { map } from 'rxjs/operators';
import { TableOptions } from '../interfaces/table-options';

function urlEncodedNameOrId(tableOptions: TableOptions): string {
    return tableOptions.tableId
        || encodeURIComponent(!!tableOptions.tableName ? tableOptions.tableName : '');
}

export function table(tableOptions: TableOptions): OperatorFunction<Executioner, Executioner> {
    return function findOperation(source: Observable<Executioner>): Observable<Executioner> {

        if (!tableOptions.tableName && !tableOptions.tableId) {
            throw new Error('Table name or table ID is required');
          }

        return source.pipe(map((exec: Executioner) => {
            return {
                ...exec,
                ...{
                    url: `${exec.url}/${urlEncodedNameOrId(tableOptions)}`
                }
            };
        }));
    };
}