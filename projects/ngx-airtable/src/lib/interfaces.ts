import {RunActionMethod, SortDirection} from './types';
import {Base} from './node-port/base';
import {HttpHeaders, HttpParams} from '@angular/common/http';

export interface AirtableConfiguration {
  apiKey?: string;
  endpointUrl?: string;
  apiVersion?: number;
}

export interface TableOptions {
  tableName?: string;
  tableId?: string;
}

export interface RunActionOptions {
  base: Base;
  method: RunActionMethod;
  path: string;
  params?: HttpParams;
  body?: any;
  headers?: HttpHeaders;
}

export interface SelectParams {
  fields?: string[];
  filterByFormula?: string;
  maxRecords?: number;
  pageSize?: number;
  sort?: SortParam[];
  view?: string;
}

export interface Params {
  [key: string]: any;
}

export interface SortParam {
  field: string;
  direction: SortDirection;
}

export interface Link {
  target: TableOptions;
  linkSelector: string;
  linkFilter: (record: any) => string;
}
