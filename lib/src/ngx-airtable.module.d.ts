/**
 * Created by bohoffi on 29.05.2017.
 */
import { ModuleWithProviders } from '@angular/core';
import { Airtable } from './node-port/airtable';
export declare const COMPONENTS: never[];
export declare const SIMPLE_PROVIDERS: typeof Airtable[];
export declare class NgxAirtableModule {
    static forRoot(): ModuleWithProviders;
    constructor(parentModule: NgxAirtableModule);
}
export { Airtable };
