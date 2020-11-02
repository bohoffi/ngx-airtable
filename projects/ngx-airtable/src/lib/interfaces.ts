/**
 * Created by bohoffi on 29.05.2017.
 */
import { HttpParams } from '@angular/common/http';

import { Base } from './node-port/base';
import { RequestMethod, SortDirection } from './types';

export interface AirtableConfiguration {
  apiKey: string;
  endpointUrl?: string;
  apiVersion?: number;
}

export interface TableOptions {
  tableName?: string;
  tableId?: string;
}

export interface RunActionOptions {
  base: Base;
  method: RequestMethod;
  path: string;
  params?: HttpParams;
  body?: any;
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
