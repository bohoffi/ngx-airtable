```ts
  import { NgModule } from '@angular/core';  
  import { NgxAirtableModule } from 'ngx-airtable';
  import { AppComponent } from './app.component';

  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      NgxAirtableModule.forRoot({
        apiKey: '<YOUR_API_KEY>'
      })
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  ```