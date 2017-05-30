/**
 * Created by bohoffi on 30.05.2017.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Base } from './base';
var Airtable = (function () {
    function Airtable(http) {
        this.http = http;
    }
    Airtable.prototype.configure = function (opts) {
        if (!opts.apiKey) {
            throw new Error('API key is required to connect to Airtable');
        }
        this._options = opts;
        return this;
    };
    Airtable.prototype.base = function (baseId) {
        return new Base(baseId, this);
    };
    Object.defineProperty(Airtable.prototype, "options", {
        get: function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    return Airtable;
}());
export { Airtable };
Airtable.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Airtable.ctorParameters = function () { return [
    { type: Http, },
]; };
//# sourceMappingURL=airtable.js.map