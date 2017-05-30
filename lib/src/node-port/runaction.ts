/**
 * Created by bohoffi on 30.05.2017.
 */
import {Http, RequestMethod, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Base} from './base';

export class RunAction {

  private _options: {
    base: Base;
    method: RequestMethod;
    path: string;
    params?: string | URLSearchParams | {
      [key: string]: any | any[];
    } | null;
    body?: any;
  };
  private _http: Http;
  private _endpointUrl: string | undefined;
  private _apiVersion: number | undefined;
  private _baseId: string;
  private _path: string;

  constructor(opts: {
    base: Base;
    method: RequestMethod;
    path: string;
    params?: string | URLSearchParams | {
      [key: string]: any | any[];
    } | null;
    body?: any;
  }) {
    this._options = opts;

    this._http = this._options.base.airtable.http;
    this._endpointUrl = this._options.base.airtable.options.endpointUrl;
    this._apiVersion = this._options.base.airtable.options.apiVersion;
    this._baseId = this._options.base.baseId;
    this._path = this._options.path;
  }

  perform(): Observable<any> {
    return this._http.request(
      `${this._endpointUrl}/v${this._apiVersion}/${this._baseId}/${this._path}`,
      {
        method: this._options.method,
        params: this._options.params,
        body: this._options.body
      }
    )
      .map((response: Response) => response.json());
  }
}
