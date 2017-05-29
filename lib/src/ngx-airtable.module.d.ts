/**
 * Created by bohoffi on 29.05.2017.
 */
import { InjectionToken, ModuleWithProviders } from '@angular/core';
import { ModuleConfig } from './interfaces';
import { AirtableService } from './services/index';
import { Http } from '@angular/http';
export declare const COMPONENTS: never[];
export declare const ModuleConfigToken: InjectionToken<ModuleConfig>;
export declare function provideAirTableService(moduleConfig: ModuleConfig, http: Http): AirtableService;
export declare class NgxAirtableModule {
    static forRoot(config: ModuleConfig): ModuleWithProviders;
    constructor(parentModule: NgxAirtableModule);
}
export { AirtableService };
