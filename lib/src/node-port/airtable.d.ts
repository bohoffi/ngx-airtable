import { Http } from '@angular/http';
import { Base } from './base';
import { AirtableConfiguration } from '../interfaces';
export declare class Airtable {
    http: Http;
    private _options;
    constructor(http: Http, _config?: AirtableConfiguration);
    configure(opts: AirtableConfiguration): Airtable;
    base(baseId: string): Base;
    readonly options: AirtableConfiguration;
    private _checkConfiguration();
}
