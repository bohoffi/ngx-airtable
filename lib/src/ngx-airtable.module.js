/**
 * Created by bohoffi on 29.05.2017.
 */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Airtable } from './node-port/airtable';
export var COMPONENTS = [];
export var SIMPLE_PROVIDERS = [Airtable];
var NgxAirtableModule = (function () {
    function NgxAirtableModule(parentModule) {
        if (parentModule) {
            throw new Error('NgxAirtableModule is already loaded. Import it in the AppModule only');
        }
    }
    NgxAirtableModule.forRoot = function () {
        return {
            ngModule: NgxAirtableModule,
            providers: [
                SIMPLE_PROVIDERS
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
                declarations: [COMPONENTS],
                exports: [COMPONENTS]
            },] },
];
/** @nocollapse */
NgxAirtableModule.ctorParameters = function () { return [
    { type: NgxAirtableModule, decorators: [{ type: Optional }, { type: SkipSelf },] },
]; };
export { Airtable };
//# sourceMappingURL=ngx-airtable.module.js.map