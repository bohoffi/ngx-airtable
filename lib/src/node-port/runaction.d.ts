/**
 * Created by bohoffi on 30.05.2017.
 */
import { RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Base } from './base';
export declare class RunAction {
    private _options;
    private _http;
    private _endpointUrl;
    private _apiVersion;
    private _baseId;
    private _path;
    constructor(opts: {
        base: Base;
        method: RequestMethod;
        path: string;
        params?: string | URLSearchParams | {
            [key: string]: any | any[];
        } | null;
        body?: any;
    });
    perform(): Observable<any>;
}
