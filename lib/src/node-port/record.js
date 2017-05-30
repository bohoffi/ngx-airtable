/**
 * Created by bohoffi on 30.05.2017.
 */
import { RequestMethod } from '@angular/http';
import { RunAction } from './runaction';
var Record = (function () {
    function Record(id, table) {
        this._id = id;
        this._table = table;
    }
    Record.prototype.fetch = function () {
        return new RunAction({
            base: this._table.base,
            method: RequestMethod.Get,
            path: this._table.urlEncodedNameOrId + "/" + this._id,
            params: {
                api_key: this._table.base.airtable.options.apiKey
            }
        }).perform();
    };
    Record.prototype.patchUpdate = function (entityData) {
        return new RunAction({
            base: this._table.base,
            method: RequestMethod.Patch,
            path: this._table.urlEncodedNameOrId + "/" + this._id,
            params: {
                api_key: this._table.base.airtable.options.apiKey
            },
            body: entityData
        })
            .perform();
    };
    Record.prototype.putUpdate = function (entityData) {
        return new RunAction({
            base: this._table.base,
            method: RequestMethod.Put,
            path: this._table.urlEncodedNameOrId + "/" + this._id,
            params: {
                api_key: this._table.base.airtable.options.apiKey
            },
            body: entityData
        })
            .perform();
    };
    Record.prototype.destroy = function () {
        return new RunAction({
            base: this._table.base,
            method: RequestMethod.Delete,
            path: this._table.urlEncodedNameOrId + "/" + this._id,
            params: {
                api_key: this._table.base.airtable.options.apiKey
            }
        })
            .perform();
    };
    return Record;
}());
export { Record };
//# sourceMappingURL=record.js.map