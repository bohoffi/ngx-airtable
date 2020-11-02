/**
 * Created by bohoffi on 30.05.2017.
 */
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RunActionOptions } from '../interfaces';

export class RunAction {

  private _options: RunActionOptions;
  private _http: HttpClient;
  private _endpointUrl: string | undefined;
  private _apiVersion: number | undefined;
  private _baseId: string;
  private _path: string;

  constructor(opts: RunActionOptions) {
    this._options = opts;

    this._http = this._options.base.airtable.http;
    this._endpointUrl = this._options.base.airtable.options.endpointUrl;
    this._apiVersion = this._options.base.airtable.options.apiVersion;
    this._baseId = this._options.base.baseId;
    this._path = this._options.path;
  }

  perform(): Observable<any> {

    let request: HttpRequest<any>;
    switch (this._options.method) {
      case 'DELETE':
      case 'GET':
      case 'HEAD':
      case 'JSONP':
      case 'OPTIONS':
        request = new HttpRequest(
          this._options.method,
          `${this._endpointUrl}/v${this._apiVersion}/${this._baseId}/${this._path}`,
          {
            params: this._options.params,
            responseType: 'json'
          }
        )
        break;
      case 'POST':
      case 'PUT':
      case 'PATCH':
        request = new HttpRequest(
          this._options.method,
          `${this._endpointUrl}/v${this._apiVersion}/${this._baseId}/${this._path}`,
          this._options.body,
          {
            params: this._options.params,
            responseType: 'json'
          }
        )
        break;
    }
    return this._http.request<any>(request);
  }
}
