/**
 * Created by bohoffi on 30.05.2017.
 */
import { HttpClient } from '@angular/common/http';

import { Airtable } from './airtable';
import { AirtableConfiguration, Params, SelectParams, SortParam } from '../interfaces';

export function _airtableFactory(http: HttpClient, config?: AirtableConfiguration): Airtable {
  return new Airtable(http, config);
}

export const normalizeQueryParams = (params: SelectParams, additional?: Params): Params => {

  const normalizedParams: Params = {};

  if (!!params.fields) {
    params.fields.forEach((fieldName: string, index: number) => {
      normalizedParams[`fields[${index}]`] = fieldName;
    });
  }

  if (!!params.filterByFormula) {
    normalizedParams.filterByFormula = params.filterByFormula;
  }

  if (!!params.maxRecords) {
    normalizedParams.maxRecords = params.maxRecords;
  }

  if (!!params.pageSize) {
    normalizedParams.pageSize = params.pageSize;
  }

  if (!!params.sort) {
    params.sort.forEach((sort: SortParam, index: number) => {
      normalizedParams[`sort[${index}][field]`] = sort.field;
      normalizedParams[`sort[${index}][direction]`] = sort.direction;
    });
  }

  if (!!params.view) {
    normalizedParams.view = params.view;
  }

  if (!!additional) {
    Object.keys(additional).forEach((key: string) => {
      normalizedParams[key] = additional[key];
    });
  }

  return normalizedParams;
};
