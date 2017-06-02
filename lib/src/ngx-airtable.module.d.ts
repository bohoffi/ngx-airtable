/**
 * Created by bohoffi on 29.05.2017.
 */
import { ModuleWithProviders } from '@angular/core';
import { SelectParams, Link } from './interfaces';
import { Airtable, Base, Query, Table } from './node-port/index';
import { LinkedTable, LinkedQuery } from './reactive/index';
import { SortDirection } from './types';
export declare class NgxAirtableModule {
    static forRoot(): ModuleWithProviders;
    constructor(parentModule: NgxAirtableModule);
}
export { Airtable, Base, Table, Query, SelectParams, SortDirection };
export { LinkedTable, LinkedQuery, Link };
