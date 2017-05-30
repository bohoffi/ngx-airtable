/**
 * Created by bohoffi on 29.05.2017.
 */
import { ModuleWithProviders } from '@angular/core';
import { Airtable } from './node-port/airtable';
import { Base } from './node-port/base';
import { Table } from './node-port/table';
import { Query } from './node-port/query';
export declare class NgxAirtableModule {
    static forRoot(): ModuleWithProviders;
    constructor(parentModule: NgxAirtableModule);
}
export { Airtable, Base, Table, Query };
