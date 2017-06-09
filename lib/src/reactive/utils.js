/**
 * Created by bohoffi on 02.06.2017.
 */
import 'rxjs/add/operator/share';
export var _extendLinked = function (record, links, base) {
    links.forEach(function (link) {
        record[link.linkSelector] = base
            .table(link.target)
            .select({
            filterByFormula: link.linkFilter(record)
        })
            .all()
            .share();
    });
    return record;
};
//# sourceMappingURL=utils.js.map