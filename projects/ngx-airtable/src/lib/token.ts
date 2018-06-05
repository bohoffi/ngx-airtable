import {InjectionToken} from '@angular/core';
import {AirtableConfiguration} from './interfaces';

export const AirtableConfigToken: InjectionToken<AirtableConfiguration> = new InjectionToken<AirtableConfiguration>('globalConfiguration');
