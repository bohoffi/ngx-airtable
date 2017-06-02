/**
 * Created by bohoffi on 02.06.2017.
 */
import { Query } from '../node-port/query';
import { Link, SelectParams } from '../interfaces';
import { Table } from '../node-port/table';
import { Observable } from 'rxjs/Observable';
export declare class LinkedQuery extends Query {
    private table;
    private links;
    constructor(params: SelectParams, table: Table, links: Link[]);
    firstPage(): Observable<any>;
    eachPage(): Observable<any>;
    all(): Observable<any>;
}
