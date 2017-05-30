import { Table } from './table';
var Base = (function () {
    function Base(baseId, airtable) {
        if (!baseId) {
            throw new Error('BaseId must be a non-empty string');
        }
        this._baseId = baseId;
        this._airtable = airtable;
    }
    Base.prototype.table = function (tableOptions) {
        return new Table(tableOptions, this);
    };
    Object.defineProperty(Base.prototype, "baseId", {
        get: function () {
            return this._baseId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Base.prototype, "airtable", {
        get: function () {
            return this._airtable;
        },
        enumerable: true,
        configurable: true
    });
    return Base;
}());
export { Base };
//# sourceMappingURL=base.js.map