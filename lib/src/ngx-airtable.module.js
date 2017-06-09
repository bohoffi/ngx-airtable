/**
 * Created by bohoffi on 29.05.2017.
 */
import { InjectionToken, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { Http } from '@angular/http';
import { _airtableFactory, Airtable, Base, Query, Table } from './node-port/index';
var AirtableConfigToken = new InjectionToken('globalConfiguration');
export var AirtableProvider = {
    provide: Airtable,
    useFactory: _airtableFactory,
    deps: [Http, AirtableConfigToken]
};
=======
import { Airtable, Base, Query, Table } from './node-port/index';
import { LinkedTable, LinkedQuery } from './reactive/index';
var SIMPLE_PROVIDERS = [Airtable];
>>>>>>> origin/linked-queries
var NgxAirtableModule = (function () {
    function NgxAirtableModule(parentModule) {
        if (parentModule) {
            throw new Error('NgxAirtableModule is already loaded. Import it in the AppModule only');
        }
    }
    NgxAirtableModule.forRoot = function (config) {
        return {
            ngModule: NgxAirtableModule,
            providers: [
                {
                    provide: AirtableConfigToken,
                    useValue: config
                }
            ]
        };
    };
    return NgxAirtableModule;
}());
export { NgxAirtableModule };
NgxAirtableModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                providers: [AirtableProvider]
            },] },
];
/** @nocollapse */
NgxAirtableModule.ctorParameters = function () { return [
    { type: NgxAirtableModule, decorators: [{ type: Optional }, { type: SkipSelf },] },
]; };
export { Airtable, Base, Table, Query };
export { LinkedTable, LinkedQuery };
//# sourceMappingURL=ngx-airtable.module.js.map