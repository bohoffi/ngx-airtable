import {RunActionMethod} from './types';
import {Base} from './node-port/base';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import { TableOptions } from './interfaces/table-options';

export interface RunActionOptions {
  base: Base;
  method: RunActionMethod;
  path: string;
  params?: HttpParams;
  body?: any;
  headers?: HttpHeaders;
}

export interface Link {
  target: TableOptions;
  linkSelector: string;
  linkFilter: (record: any) => string;
}
