import { HttpClient, HttpRequest, HttpHeaders, HttpParams, HttpEvent, HttpEventType } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { Base } from './base';
import { AirtableConfiguration } from '../interfaces';
import { AirtableConfigToken } from '../token';
import { RunAction } from './runaction';
import { Observable, OperatorFunction } from 'rxjs';
import { map, last } from 'rxjs/operators';

const defaultOptions: AirtableConfiguration = {
  endpointUrl: 'https://api.airtable.com',
  apiVersion: 0
};

@Injectable({
  providedIn: 'root'
})
export class Airtable {

  constructor(private http: HttpClient,
    @Inject(AirtableConfigToken) private config: AirtableConfiguration) {
    this.config = { ...defaultOptions, ...this.config };
  }

  configure(opts: AirtableConfiguration): Airtable {
    this.config = { ...this.config, ...opts };
    this._checkConfiguration();

    return this;
  }

  base(baseId: string): Base {
    this._checkConfiguration();
    return new Base(baseId);
  }

  execute(action: RunAction): Observable<any> {

    const headers = {
      ...{
        authorization: `Bearer ${this.config.apiKey}`
      }, ...action.headers
    };

    const request: HttpRequest<any> = new HttpRequest<any>(action.method,
      `${this.config.endpointUrl}/v${this.config.apiVersion}/${action.base.baseId}/${action.path}`,
      action.body,
      {
        headers: new HttpHeaders(headers),
        params: action.params
      });

    const requestResult = this.http.request(request)
      .pipe(
        map(event => this._mapApiResponse(event)),
        last() // return last (completed) message to caller,
      );

    (action.pipes || []).forEach((pipe: OperatorFunction<any, any>) => requestResult.pipe(pipe));

    return requestResult;
    // return this.http.request(request)
    //   .pipe(
    //     map(event => this._mapApiResponse(event)),
    //     last() // return last (completed) message to caller,
    //   );
  }

  private _checkConfiguration(): void {
    if (!this.config.apiKey) {
      throw new Error('API key is required to connect to Airtable');
    }
  }

  private _mapApiResponse(event: HttpEvent<any>) {
    if (event.type === HttpEventType.Response) {
      return event.body;
    }
    return null;
  }
}
