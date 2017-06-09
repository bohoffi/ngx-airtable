import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './components/app/app.component';
import {NgxAirtableModule} from 'ngx-airtable';
<<<<<<< HEAD
import {BugsComponent} from './components/bugs/bugs.component';
import {MembersComponent} from './components/members/members.component';
import {FeaturesComponent} from './components/features/features.component';
<<<<<<< HEAD
=======
import {API_KEY} from './constants';
>>>>>>> global-config
=======
import { LinkedTableComponent } from './components/linked-table/linked-table.component';
>>>>>>> origin/linked-queries

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
