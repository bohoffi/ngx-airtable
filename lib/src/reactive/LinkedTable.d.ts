/**
 * Created by bohoffi on 01.06.2017.
 */
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import { Table } from '../node-port/index';
import { Link, SelectParams } from '../interfaces';
import { LinkedQuery } from './LinkedQuery';
export declare class LinkedTable extends Table {
    private origin;
    private links;
    static fromTable(origin: Table, links: Link[]): LinkedTable;
    constructor(origin: Table, links: Link[]);
    find(id: string): Observable<any>;
    select(params?: SelectParams): LinkedQuery;
    create(entityData: any): Observable<any>;
    update(id: string, entityData: any): Observable<any>;
    destroy(id: string): Observable<any>;
    replace(id: string, entityData: any): Observable<any>;
}
