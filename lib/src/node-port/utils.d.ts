/**
 * Created by bohoffi on 30.05.2017.
 */
import { Http } from '@angular/http';
import { Airtable } from './airtable';
import { AirtableConfiguration, Params, SelectParams } from '../interfaces';
export declare function _airtableFactory(http: Http, config?: AirtableConfiguration): Airtable;
export declare const normalizeQueryParams: (params: SelectParams, additional?: Params | undefined) => Params;
