/**
 * Created by bohoffi on 29.05.2017.
 */
import { InjectionToken, NgModule, Optional, SkipSelf } from '@angular/core';
import { AirtableService } from './services/index';
import { Http } from '@angular/http';
export var COMPONENTS = [];
export var ModuleConfigToken = new InjectionToken('moduleConfig');
export function provideAirTableService(moduleConfig, http) {
    return new AirtableService(moduleConfig, http);
}
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
                    provide: ModuleConfigToken,
                    useValue: config
                },
                {
                    provide: AirtableService,
                    useFactory: provideAirTableService,
                    deps: [
                        ModuleConfigToken,
                        Http
                    ]
                }
            ]
        };
    };
    return NgxAirtableModule;
}());
export { NgxAirtableModule };
NgxAirtableModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [COMPONENTS],
                exports: [COMPONENTS]
            },] },
];
/** @nocollapse */
NgxAirtableModule.ctorParameters = function () { return [
    { type: NgxAirtableModule, decorators: [{ type: Optional }, { type: SkipSelf },] },
]; };
export { AirtableService };
//# sourceMappingURL=ngx-airtable.module.js.map