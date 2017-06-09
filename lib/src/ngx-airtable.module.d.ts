/**
 * Created by bohoffi on 29.05.2017.
 */
import { InjectionToken, ModuleWithProviders } from '@angular/core';
import { Http } from '@angular/http';
import { AirtableConfiguration, SelectParams } from './interfaces';
import { Airtable, Base, Query, Table } from './node-port/index';
import { SortDirection } from './types';
export declare const AirtableProvider: {
    provide: typeof Airtable;
    useFactory: (http: Http, config?: AirtableConfiguration | undefined) => Airtable;
    deps: (InjectionToken<AirtableConfiguration> | typeof Http)[];
};
export declare class NgxAirtableModule {
    static forRoot(config?: AirtableConfiguration): ModuleWithProviders;
    constructor(parentModule: NgxAirtableModule);
}
export { Airtable, Base, Table, Query, SelectParams, SortDirection };
