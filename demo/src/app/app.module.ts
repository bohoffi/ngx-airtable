import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './components/app/app.component';
import {NgxAirtableModule} from 'ngx-airtable';
import {BugsComponent} from './components/bugs/bugs.component';
import {MembersComponent} from './components/members/members.component';
import {FeaturesComponent} from './components/features/features.component';
import {API_KEY} from './utils/constants';
import { LinkedTableComponent } from './components/linked-table/linked-table.component';

@NgModule({
  declarations: [
    AppComponent,
    BugsComponent,
    MembersComponent,
    FeaturesComponent,
    LinkedTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxAirtableModule.forRoot({
      apiKey: API_KEY
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}