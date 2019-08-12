import { NgxAirtableModule } from 'ngx-airtable';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BugsComponent } from './bugs/bugs.component';
import { FeaturesComponent } from './features/features.component';
import { MembersComponent } from './members/members.component';
import { LinkedTableComponent } from './linked-table/linked-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    BugsComponent,
    FeaturesComponent,
    MembersComponent,
    LinkedTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    MatCardModule,
    MatToolbarModule,

    NgxAirtableModule.forRoot({
      apiKey: 'key9k9HOerYrQQgTc'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
