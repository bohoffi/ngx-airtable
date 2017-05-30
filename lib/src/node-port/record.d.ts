import { Observable } from 'rxjs/Observable';
import { Table } from './table';
export declare class Record {
    private _id;
    private _table;
    constructor(id: string, table: Table);
    fetch(): Observable<any>;
    patchUpdate(entityData: any): Observable<any>;
    putUpdate(entityData: any): Observable<any>;
    destroy(): Observable<any>;
}
