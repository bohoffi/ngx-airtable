import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxAirtableModule } from 'ngx-airtable';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { API_KEY } from './utils/constants';
import { BugsComponent } from './bugs/bugs.component';
import { MembersComponent } from './members/members.component';
import { FeaturesComponent } from './features/features.component';
import { LinkedTableComponent } from './linked-table/linked-table.component';
import { HttpClientModule } from '@angular/common/http';

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
    BrowserAnimationsModule,
    HttpClientModule,
    NgxAirtableModule.forRoot({
      apiKey: API_KEY
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
