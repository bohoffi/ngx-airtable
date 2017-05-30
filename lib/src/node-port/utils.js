export var normalizeQueryParams = function (params, additional) {
    var normalizedParams = {};
    if (!!params.fields) {
        params.fields.forEach(function (fieldName, index) {
            normalizedParams["fields[" + index + "]"] = fieldName;
        });
    }
    if (!!params.filterByFormula) {
        normalizedParams['filterByFormula'] = params.filterByFormula;
    }
    if (!!params.maxRecords) {
        normalizedParams['maxRecords'] = params.maxRecords;
    }
    if (!!params.pageSize) {
        normalizedParams['pageSize'] = params.pageSize;
    }
    if (!!params.sort) {
        params.sort.forEach(function (sort, index) {
            normalizedParams["sort[" + index + "][field]"] = sort.field;
            normalizedParams["sort[" + index + "][direction]"] = sort.direction;
        });
    }
    if (!!params.view) {
        normalizedParams['view'] = params.view;
    }
    if (!!additional) {
        Object.keys(additional).forEach(function (key) {
            normalizedParams[key] = additional[key];
        });
    }
    return normalizedParams;
};
//# sourceMappingURL=utils.js.map