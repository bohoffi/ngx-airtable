import { InjectionToken, ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AirtableConfiguration } from './interfaces';
import { Airtable } from './node-port/airtable';
import { _airtableFactory } from './node-port/utils';

const AirtableConfigToken: InjectionToken<AirtableConfiguration> = new InjectionToken<AirtableConfiguration>('globalConfiguration');

export const AirtableProvider = {
  provide: Airtable,
  useFactory: _airtableFactory,
  deps: [HttpClient, AirtableConfigToken]
};

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [AirtableProvider]
})
export class NgxAirtableModule {

  static forRoot(config?: AirtableConfiguration): ModuleWithProviders<NgxAirtableModule> {
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
