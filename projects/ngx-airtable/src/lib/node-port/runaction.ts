/**
 * Created by bohoffi on 30.05.2017.
 */
import {HttpClient, HttpEvent, HttpEventType, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

import {RunActionOptions} from '../interfaces';
import {last, map, tap} from 'rxjs/operators';

export class RunAction {

  private _options: RunActionOptions;
  private _http: HttpClient;
  private readonly _endpointUrl: string | undefined;
  private readonly _apiVersion: number | undefined;
  private readonly _baseId: string;
  private readonly _path: string;

  constructor(opts: RunActionOptions) {
    this._options = opts;

    this._http = this._options.base.airtable.http;
    this._endpointUrl = this._options.base.airtable.options.endpointUrl;
    this._apiVersion = this._options.base.airtable.options.apiVersion;
    this._baseId = this._options.base.baseId;
    this._path = this._options.path;
  }

  perform(): Observable<any> {
    const request: HttpRequest<any> = new HttpRequest<any>(this._options.method,
      `${this._endpointUrl}/v${this._apiVersion}/${this._baseId}/${this._path}`,
      this._options.body,
      {
        headers: this._options.headers,
        params: this._options.params
      });

    return this._http.request(request)
      .pipe(
        map(event => this._mapApiResponse(event)),
        last() // return last (completed) message to caller
      );
  }

  private _mapApiResponse(event: HttpEvent<any>) {
    if (event.type === HttpEventType.Response) {
      return event.body;
    }
    return null;
  }
}
