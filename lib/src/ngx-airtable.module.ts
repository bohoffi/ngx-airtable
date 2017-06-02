/**
 * Created by bohoffi on 29.05.2017.
 */
import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SelectParams, Link} from './interfaces';
import {Airtable, Base, Query, Table} from './node-port/index';
import {LinkedTable, LinkedQuery} from './reactive/index';
import {SortDirection} from './types';

const SIMPLE_PROVIDERS = [Airtable];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: []
})
export class NgxAirtableModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxAirtableModule,
      providers: [
        SIMPLE_PROVIDERS
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
export {LinkedTable, LinkedQuery, Link};

