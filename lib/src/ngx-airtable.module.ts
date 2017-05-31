/**
 * Created by bohoffi on 29.05.2017.
 */
import {InjectionToken, ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Http} from '@angular/http';

import {AirtableConfiguration, SelectParams} from './interfaces';
import {_airtableFactory, Airtable, Base, Query, Table} from './node-port/index';
import {SortDirection} from './types';

const AirtableConfigToken: InjectionToken<AirtableConfiguration> = new InjectionToken<AirtableConfiguration>('globalConfiguration');

export const AirtableProvider = {
  provide: Airtable,
  useFactory: _airtableFactory,
  deps: [Http, AirtableConfigToken]
};

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [AirtableProvider]
})
export class NgxAirtableModule {

  static forRoot(config?: AirtableConfiguration): ModuleWithProviders {
    return {
      ngModule: NgxAirtableModule,
      providers: [
        {
          provide: AirtableConfigToken,
          useValue: config
        }
      ]
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: NgxAirtableModule) {
    if (parentModule) {
      throw new Error('NgxAirtableModule is already loaded. Import it in the AppModule only');
    }
  }
}

export {Airtable, Base, Table, Query, SelectParams, SortDirection};

