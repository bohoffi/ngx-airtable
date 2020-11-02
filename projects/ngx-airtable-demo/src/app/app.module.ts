import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownModule } from 'ngx-markdown';

import { NgxAirtableModule } from 'ngx-airtable';

import { AppComponent } from './app.component';
import { BugsComponent } from './bugs/bugs.component';
import { FeaturesComponent } from './features/features.component';
import { MembersComponent } from './members/members.component';
import { LinkedTableComponent } from './linked-table/linked-table.component';
import { VersionPickerComponent } from './version-picker/version-picker.component';
import { RouterModule, Routes } from '@angular/router';
import { Version3Component } from './version/version3/version3.component';
import { Version2Component } from './version/version2/version2.component';
import { VERSIONS } from './versions';

const ROUTES: Routes = [
  {
    path: '',
    redirectTo: VERSIONS.find(version => version.current).route.join('/'),
    pathMatch: 'full'
  },
  ...VERSIONS
  .map(version => {
    return {
      path: version.route.join('/'),
      component: version.component
    };
  })
];

@NgModule({
  declarations: [
    AppComponent,
    BugsComponent,
    FeaturesComponent,
    MembersComponent,
    LinkedTableComponent,
    VersionPickerComponent,
    Version3Component,
    Version2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),

    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient
    }),
    FlexLayoutModule,

    NgxAirtableModule.forRoot({
      apiKey: 'keyWiS4PaYw0R6l6y'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
