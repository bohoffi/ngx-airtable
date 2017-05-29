import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {NgxAirtableModule} from '../../../lib/src/ngx-airtable.module';
import {API_KEY} from './constants';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxAirtableModule.forRoot({
      apiKey: API_KEY,
      base: 'appXYMa40P0eOmznh',
      tables: {
        'authors': 'authors'
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
