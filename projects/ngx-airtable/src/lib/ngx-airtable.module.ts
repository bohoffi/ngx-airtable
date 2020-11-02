import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AirtableConfiguration } from './interfaces';
import { AirtableConfigToken } from './tokens';

@NgModule({
  imports: [
    CommonModule
  ]
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
