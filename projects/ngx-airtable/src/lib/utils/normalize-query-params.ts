
import { HttpParams } from '@angular/common/http';
import { SelectParams } from '../interfaces/select-params';
import { Params } from '../interfaces/params';
import { SortParam } from '../interfaces/sort-param';

export const normalizeQueryParams = (params?: SelectParams, additional?: Params): HttpParams => {

    const normalizedParams: any = {};

    if (!!params) {
        if (!!params.fields) {
            params.fields.forEach((fieldName: string, index: number) => {
                normalizedParams[`fields[${index}]`] = fieldName;
            });
        }

        if (!!params.filterByFormula) {
            normalizedParams['filterByFormula'] = params.filterByFormula;
        }

        if (!!params.maxRecords) {
            normalizedParams['maxRecords'] = `${params.maxRecords}`;
        }

        if (!!params.pageSize) {
            normalizedParams['pageSize'] = `${params.pageSize}`;
        }

        if (!!params.sort) {
            params.sort.forEach((sort: SortParam, index: number) => {
                normalizedParams[`sort[${index}][field]`] = sort.field;
                normalizedParams[`sort[${index}][direction]`] = sort.direction;
            });
        }

        if (!!params.view) {
            normalizedParams['view'] = params.view;
        }
    }

    if (!!additional) {
        // TODO check array params
        Object.keys(additional).forEach((key: string) => {
            normalizedParams[key] = additional[key];
        });
    }

    return new HttpParams({
        fromObject: normalizedParams
    });
};
