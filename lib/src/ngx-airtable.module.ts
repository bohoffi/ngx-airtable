/**
 * Created by bohoffi on 29.05.2017.
 */
import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Airtable} from './node-port/airtable';

export const COMPONENTS = [];
export const SIMPLE_PROVIDERS = [Airtable];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [COMPONENTS],
  exports: [COMPONENTS]
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

export {Airtable};
export {Base} from './node-port/base';
export {Table} from './node-port/table';
export {Query} from './node-port/Query';
