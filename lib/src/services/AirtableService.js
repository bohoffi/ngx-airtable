/**
 * Created by bohoffi on 29.05.2017.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AIRTABLE_BASE_URL } from '../utils/constants';
var AirtableService = (function () {
    function AirtableService(_config, _http) {
        this._config = _config;
        this._http = _http;
    }
    AirtableService.prototype.get = function (table) {
        if (!this._checkConfig(table)) {
            throw new Error("There is no configured table (neither alias or value) with the name '" + table + "'");
        }
        return this._http
            .get(this._buildUrl(table))
            .map(function (response) { return response.json(); });
    };
    AirtableService.prototype._checkConfig = function (table) {
        var _this = this;
        return Object.keys(this._config.tables)
            .some(function (alias) { return alias === table; })
            || Object.keys(this._config.tables)
                .map(function (alias) { return _this._config.tables[alias]; })
                .some(function (value) { return value === table; });
    };
    AirtableService.prototype._buildUrl = function (table) {
        return "" + AIRTABLE_BASE_URL + this._config.base + "/" + this._getTableByAliasOrValue(table) + "?api_key=" + this._config.apiKey;
    };
    AirtableService.prototype._getTableByAliasOrValue = function (table) {
        var _this = this;
        var matchedAlias = Object.keys(this._config.tables).find(function (alias) { return alias === table; });
        if (!!matchedAlias) {
            return this._config.tables[table];
        }
        return Object.keys(this._config.tables)
            .map(function (alias) { return _this._config.tables[alias]; })
            .find(function (value) { return value === table; });
    };
    return AirtableService;
}());
export { AirtableService };
AirtableService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AirtableService.ctorParameters = function () { return [
    null,
    { type: Http, },
]; };
//# sourceMappingURL=AirtableService.js.map