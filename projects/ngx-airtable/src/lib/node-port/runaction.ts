import { HttpHeaders, HttpParams } from '@angular/common/http';

import { RunActionOptions } from '../interfaces';
import { RunActionMethod } from '../types';
import { Base } from './base';
import { Table } from './table';
import { normalizeQueryParams } from '../utils/normalize-query-params';
import { OperatorFunction } from 'rxjs';
import { SelectParams } from '../interfaces/select-params';

export class RunAction {

  private pipeOperators: OperatorFunction<any, any>[];
  
  public static get(base: Base, table: Table, params: SelectParams = {}): RunAction {
    return new RunAction({
      base: base,
      method: 'GET',
      path: table.urlEncodedNameOrId,
      params: normalizeQueryParams(params)
    });
  }

  public static getById(id: string, base: Base, table: Table): RunAction {
    return new RunAction({
      base: base,
      method: 'GET',
      path: `${table.urlEncodedNameOrId}/${id}`,
      params: normalizeQueryParams({})
    });
  }

  public static post(data: any, base: Base, table: Table): RunAction {
    return new RunAction({
      base: base,
      method: 'POST',
      path: table.urlEncodedNameOrId,
      params: normalizeQueryParams({}),
      body: data
    });
  }

  public static put(id: string, data: any, base: Base, table: Table): RunAction {
    return new RunAction({
      base: base,
      method: 'PUT',
      path: `${table.urlEncodedNameOrId}/${id}`,
      params: normalizeQueryParams({}),
      body: data
    });
  }

  public static patch(id: string, data: any, base: Base, table: Table): RunAction {
    return new RunAction({
      base: base,
      method: 'PATCH',
      path: `${table.urlEncodedNameOrId}/${id}`,
      params: normalizeQueryParams({}),
      body: data
    });
  }

  public static delete(id: string, base: Base, table: Table): RunAction {
    return new RunAction({
      base: base,
      method: 'DELETE',
      path: `${table.urlEncodedNameOrId}/${id}`,
      params: normalizeQueryParams({})
    });
  }

  constructor(private opts: RunActionOptions) {
  }

  public get headers(): HttpHeaders {
    return this.opts.headers;
  }

  public get method(): RunActionMethod {
    return this.opts.method;
  }

  public get base(): Base {
    return this.opts.base;
  }

  public get path(): string {
    return this.opts.path;
  }

  public get body(): any {
    return this.opts.body;
  }

  public get params(): HttpParams {
    return this.opts.params;
  }

  public get pipes(): OperatorFunction<any, any>[] {
    return this.pipeOperators;
  }

  public pipe(...operators: OperatorFunction<any, any>[]): RunAction {
    this.pipeOperators = operators;
    return this;
  }
}
