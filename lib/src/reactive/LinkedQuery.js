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
/**
 * Created by bohoffi on 02.06.2017.
 */
import { Query } from '../node-port/query';
import { _extendLinked } from './utils';
var LinkedQuery = (function (_super) {
    __extends(LinkedQuery, _super);
    function LinkedQuery(params, table, links) {
        var _this = _super.call(this, params, table) || this;
        _this.table = table;
        _this.links = links;
        return _this;
    }
    LinkedQuery.prototype.firstPage = function () {
        var _this = this;
        return _super.prototype.firstPage.call(this)
            .map(function (records) { return records.map(function (record) { return _extendLinked(record, _this.links, _this.table.base); }); });
    };
    LinkedQuery.prototype.eachPage = function () {
        var _this = this;
        return _super.prototype.eachPage.call(this)
            .map(function (records) { return records.map(function (record) { return _extendLinked(record, _this.links, _this.table.base); }); });
    };
    LinkedQuery.prototype.all = function () {
        var _this = this;
        return _super.prototype.all.call(this)
            .map(function (records) { return records.map(function (record) { return _extendLinked(record, _this.links, _this.table.base); }); });
    };
    return LinkedQuery;
}(Query));
export { LinkedQuery };
//# sourceMappingURL=LinkedQuery.js.map