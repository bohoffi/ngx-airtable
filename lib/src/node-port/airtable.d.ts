import { Http } from '@angular/http';
import { Base } from './base';
export declare class Airtable {
    http: Http;
    private _options;
    constructor(http: Http);
    configure(opts: {
        apiKey: string;
        endpointUrl?: string;
        apiVersion?: number;
    }): Airtable;
    base(baseId: string): Base;
    readonly options: {
        apiKey: string;
        endpointUrl?: string;
        apiVersion?: number;
    };
}
