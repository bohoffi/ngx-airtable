import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';

import {AirtableConfiguration} from './interfaces';
import {AirtableConfigToken} from './token';
import {Airtable} from './node-port/airtable';


@NgModule({
  imports: [
    CommonModule
  ],
})
export class NgxAirtableModule {
  static forRoot(config?: AirtableConfiguration): ModuleWithProviders {
    return {
      ngModule: NgxAirtableModule,
      providers: [
        Airtable,
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
