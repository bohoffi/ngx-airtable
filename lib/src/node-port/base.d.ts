/**
 * Created by bohoffi on 30.05.2017.
 */
import { Airtable } from './airtable';
import { Table } from './table';
export declare class Base {
    private _baseId;
    private _airtable;
    constructor(baseId: string, airtable: Airtable);
    table(tableOptions: {
        tableName?: string;
        tableId?: string;
    }): Table;
    readonly baseId: string;
    readonly airtable: Airtable;
}
