import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { RunActionOptions } from '../interfaces';
export declare class RunAction {
    private _options;
    private _http;
    private _endpointUrl;
    private _apiVersion;
    private _baseId;
    private _path;
    constructor(opts: RunActionOptions);
    perform(): Observable<any>;
}
