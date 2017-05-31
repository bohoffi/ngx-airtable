import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/defer';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/merge';
import { SelectParams } from '../interfaces';
import { Table } from './table';
export declare class Query {
    private _params;
    private _table;
    constructor(params: SelectParams, table: Table);
    firstPage(): Observable<any>;
    eachPage(): Observable<any>;
    all(): Observable<any>;
    private _eachPage(offset?, previous?);
    private _all(offset?, previous?);
}
