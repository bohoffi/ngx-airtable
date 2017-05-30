/**
 * Created by bohoffi on 30.05.2017.
 */
import { RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/defer';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/merge';
import { RunAction } from './runaction';
import { normalizeQueryParams } from './utils';
var Query = (function () {
    function Query(params, table) {
        this._params = params;
        this._table = table;
    }
    Query.prototype.firstPage = function () {
        return new RunAction({
            base: this._table.base,
            method: RequestMethod.Get,
            path: this._table.urlEncodedNameOrId,
            params: normalizeQueryParams(this._params, {
                api_key: this._table.base.airtable.options.apiKey
            })
        })
            .perform();
    };
    Query.prototype.eachPage = function () {
        return this._eachPage();
    };
    Query.prototype._eachPage = function (offset, previous) {
        var _this = this;
        var additional = {
            api_key: this._table.base.airtable.options.apiKey
        };
        if (!!offset) {
            additional['offset'] = offset;
        }
        return Observable.defer(function () { return new RunAction({
            base: _this._table.base,
            method: RequestMethod.Get,
            path: _this._table.urlEncodedNameOrId,
            params: normalizeQueryParams(_this._params, additional)
        })
            .perform()
            .flatMap(function (result) {
            var items$ = !!previous
                ? previous.merge(Observable.of(result.records))
                : Observable.of(result.records);
            var next$ = !!result.offset
                ? _this._eachPage(result.offset, Observable.of(result.records))
                : Observable.empty();
            return items$.merge(next$);
        }); });
    };
    Query.prototype.all = function () {
        return this._all();
    };
    Query.prototype._all = function (offset, previous) {
        var _this = this;
        var additional = {
            api_key: this._table.base.airtable.options.apiKey
        };
        if (!!offset) {
            additional['offset'] = offset;
        }
        return Observable.defer(function () { return new RunAction({
            base: _this._table.base,
            method: RequestMethod.Get,
            path: _this._table.urlEncodedNameOrId,
            params: normalizeQueryParams(_this._params, additional)
        })
            .perform()
            .flatMap(function (result) {
            var items$ = !!previous
                ? Observable.of(previous.concat(result.records))
                : Observable.of(result.records);
            var next$ = !!result.offset
                ? _this._all(result.offset, result.records)
                : Observable.empty();
            return items$.merge(next$);
        }); });
    };
    return Query;
}());
export { Query };
//# sourceMappingURL=query.js.map