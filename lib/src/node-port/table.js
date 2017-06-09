/**
 * Created by bohoffi on 30.05.2017.
 */
import { RequestMethod } from '@angular/http';
import { Record } from './record';
import { RunAction } from './runaction';
import { Query } from './query';
var Table = (function () {
    function Table(opts, base) {
        if (!opts.tableName && !opts.tableId) {
            throw new Error('Table name or table ID is required');
        }
        this._options = opts;
        this._base = base;
    }
    /**
     * Returns the record defined by the given id.
     * @param id
     * @returns {Observable<any>}
     */
    Table.prototype.find = function (id) {
        return new Record(id, this).fetch();
    };
    /**
     * Creates a new Query instance with the given parameters.
     * @param params
     * @returns {Query}
     */
    Table.prototype.select = function (params) {
        if (!params) {
            params = {};
        }
        return new Query(params, this);
    };
    /**
     * Creates a new record with the given data.
     * @param entityData
     * @returns {Observable<any>}
     */
    Table.prototype.create = function (entityData) {
        return new RunAction({
            base: this.base,
            method: RequestMethod.Post,
            path: this.urlEncodedNameOrId,
            params: {
                api_key: this.base.airtable.options.apiKey
            },
            body: entityData
        })
            .perform();
    };
    /**
     * Updates a record defined by the given id with the given data.
     * @param id
     * @param entityData
     * @returns {Observable<any>}
     */
    Table.prototype.update = function (id, entityData) {
        return new Record(id, this).patchUpdate(entityData);
    };
    /**
     * Deletes a record defined by the given id.
     * @param id
     * @returns {Observable<any>}
     */
    Table.prototype.destroy = function (id) {
        return new Record(id, this).destroy();
    };
    /**
     * Replaces a record defined by the given id with the given data.
     * @param id
     * @param entityData
     * @returns {Observable<any>}
     */
    Table.prototype.replace = function (id, entityData) {
        return new Record(id, this).putUpdate(entityData);
    };
    Object.defineProperty(Table.prototype, "options", {
        get: function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "base", {
        get: function () {
            return this._base;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "urlEncodedNameOrId", {
        get: function () {
            return this._options.tableId || encodeURIComponent(!!this._options.tableName ? this._options.tableName : '');
        },
        enumerable: true,
        configurable: true
    });
    return Table;
}());
export { Table };
//# sourceMappingURL=table.js.map