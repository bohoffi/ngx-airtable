import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ModuleConfig } from '../interfaces';
export declare class AirtableService {
    private _config;
    private _http;
    constructor(_config: ModuleConfig, _http: Http);
    get(table: string): Observable<any>;
    private _checkConfig(table);
    private _buildUrl(table);
    private _getTableByAliasOrValue(table);
}
