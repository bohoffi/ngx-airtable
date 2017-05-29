/**
 * Created by bohoffi on 29.05.2017.
 */
import {InjectionToken, ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {ModuleConfig} from './interfaces';
import {AirtableService} from './services/index';
import {Http} from '@angular/http';
import {CommonModule} from '@angular/common';

export const COMPONENTS = [];

export const ModuleConfigToken: InjectionToken<ModuleConfig> = new InjectionToken<ModuleConfig>('moduleConfig');

export function provideAirTableService(moduleConfig: ModuleConfig, http: Http): AirtableService {
  return new AirtableService(moduleConfig, http);
}

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [COMPONENTS],
  exports: [COMPONENTS]
})
export class NgxAirtableModule {

  static forRoot(config: ModuleConfig): ModuleWithProviders {
    return {
      ngModule: NgxAirtableModule,
      providers: [
        {
          provide: ModuleConfigToken,
          useValue: config
        },
        {
          provide: AirtableService,
          useFactory: provideAirTableService,
          deps: [
            ModuleConfigToken,
            Http
          ]
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

export {AirtableService};
