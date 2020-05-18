import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { ExecutionMethod } from '../types/execution-method';

export interface Executioner {
    http: HttpClient;
    base?: string;
    table?: string;
    method?: ExecutionMethod;
    url: string;
    httpParams?: HttpParams;
    body?: any;
    headers?: HttpHeaders;
}
