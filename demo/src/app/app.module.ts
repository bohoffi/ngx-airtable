import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {NgxAirtableModule} from '../../../lib/src/ngx-airtable.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxAirtableModule.forRoot({
      apiKey: 'keyOJjgOPGqJxNuGK',
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
