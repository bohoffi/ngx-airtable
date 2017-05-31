/**
 * Created by bohoffi on 30.05.2017.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Base } from './base';
var defaultOptions = {
    endpointUrl: 'https://api.airtable.com',
    apiVersion: 0
};
var Airtable = (function () {
    function Airtable(http, _config) {
        this.http = http;
        this._options = Object.assign(defaultOptions, _config);
    }
    Airtable.prototype.configure = function (opts) {
        this._options = Object.assign(this._options, opts);
        this._checkConfiguration();
        return this;
    };
    Airtable.prototype.base = function (baseId) {
        this._checkConfiguration();
        return new Base(baseId, this);
    };
    Object.defineProperty(Airtable.prototype, "options", {
        get: function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    Airtable.prototype._checkConfiguration = function () {
        if (!this._options.apiKey) {
            throw new Error('API key is required to connect to Airtable');
        }
    };
    return Airtable;
}());
export { Airtable };
Airtable.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Airtable.ctorParameters = function () { return [
    { type: Http, },
    null,
]; };
//# sourceMappingURL=airtable.js.map