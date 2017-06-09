var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import 'rxjs/add/operator/filter';
import { Table } from '../node-port/index';
import { LinkedQuery } from './LinkedQuery';
import { _extendLinked } from './utils';
var LinkedTable = (function (_super) {
    __extends(LinkedTable, _super);
    function LinkedTable(origin, links) {
        var _this = _super.call(this, origin.options, origin.base) || this;
        _this.origin = origin;
        _this.links = links;
        return _this;
    }
    LinkedTable.fromTable = function (origin, links) {
        return new LinkedTable(origin, links);
    };
    LinkedTable.prototype.find = function (id) {
        var _this = this;
        return _super.prototype.find.call(this, id)
            .map(function (record) { return _extendLinked(record, _this.links, _this.origin.base); });
    };
    LinkedTable.prototype.select = function (params) {
        if (!params) {
            params = {};
        }
        return new LinkedQuery(params, this.origin, this.links);
    };
    LinkedTable.prototype.create = function (entityData) {
        throw new Error('LinkedTable is not able to create entities');
    };
    LinkedTable.prototype.update = function (id, entityData) {
        throw new Error('LinkedTable is not able to update entities');
    };
    LinkedTable.prototype.destroy = function (id) {
        throw new Error('LinkedTable is not able to destroy entities');
    };
    LinkedTable.prototype.replace = function (id, entityData) {
        throw new Error('LinkedTable is not able to replace entities');
    };
    return LinkedTable;
}(Table));
export { LinkedTable };
//# sourceMappingURL=LinkedTable.js.map