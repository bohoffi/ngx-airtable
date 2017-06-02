/**
 * Created by bohoffi on 29.05.2017.
 */
import {RequestMethod} from '@angular/http';

import {Base} from './node-port/base';
import {SortDirection} from './types';

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
  method: RequestMethod;
  path: string;
  params?: string | URLSearchParams | {
    [key: string]: any | any[];
  } | null;
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
