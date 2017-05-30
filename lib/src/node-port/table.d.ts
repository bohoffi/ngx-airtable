import { Observable } from 'rxjs/Observable';
import { Base } from './base';
import { Query } from './query';
import { SelectParams } from '../interfaces';
export declare class Table {
    private _options;
    private _base;
    constructor(opts: {
        tableName?: string;
        tableId?: string;
    }, base: Base);
    /**
     * Returns the record defined by the given id.
     * @param id
     * @returns {Observable<any>}
     */
    find(id: string): Observable<any>;
    select(params?: SelectParams): Query;
    /**
     * Creates a new record with the given data.
     * @param entityData
     * @returns {Observable<any>}
     */
    create(entityData: any): Observable<any>;
    /**
     * Updates a record defined by the given id with the given data.
     * @param id
     * @param entityData
     * @returns {Observable<any>}
     */
    update(id: string, entityData: any): Observable<any>;
    /**
     * Deletes a record defined by the given id.
     * @param id
     * @returns {Observable<any>}
     */
    destroy(id: string): Observable<any>;
    /**
     * Replaces a record defined by the given id with the given data.
     * @param id
     * @param entityData
     * @returns {Observable<any>}
     */
    replace(id: string, entityData: any): Observable<any>;
    readonly base: Base;
    readonly urlEncodedNameOrId: string;
}
