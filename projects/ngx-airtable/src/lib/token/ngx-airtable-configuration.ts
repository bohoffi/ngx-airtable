import { InjectionToken } from '@angular/core';
import { AirtableConfiguration } from '../interfaces/airtable-configuration';

export const NGX_AIRTABLE_CONFIG: InjectionToken<AirtableConfiguration>
    = new InjectionToken<AirtableConfiguration>('AirtableConfiguration');
