import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Airtable, table, select, execute, firstPage, Executioner } from 'ngx-airtable';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // bugsWithFeatures: Observable<any>;
  // private _linkedTable: LinkedTable;

  private base: Observable<Executioner>;
  public bugs: Observable<any>;
  public members: Observable<any>;
  public features: Observable<any>;

  public readonly module = 
  `
  import { NgModule } from '@angular/core';
  
  import { NgxAirtableModule } from 'ngx-airtable';

  import { AppComponent } from './app.component';

  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      NgxAirtableModule.forRoot({
        apiKey: 'key9k9HOerYrQQgTc'
      })
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule {}
  `;

  public readonly component = 
  `
  import { Component, OnInit } from '@angular/core';
  import { Observable } from 'rxjs';
  import { Airtable, table, select, execute, firstPage, Executioner } from 'ngx-airtable';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
  })
  export class AppComponent implements OnInit {

    private base: Observable<Executioner>;
    public bugs: Observable<any>;
    public members: Observable<any>;
    public features: Observable<any>;

    constructor(private readonly airtable: Airtable) {
      this.initAirtable();
    }

    public ngOnInit(): void {
      this._fetchData();
    }

    private initAirtable(): void {

      this.base = this.airtable.build('app7rAIjII1EISWEN');
    }

    private _fetchData(): void {

      // see below
    }
  }
  `;

  constructor(private readonly airtable: Airtable) {
    this.initAirtable();
  }

  public ngOnInit(): void {
    this._fetchData();
  }

  private initAirtable(): void {

    // this._linkedTable = LinkedTable.fromTable(
    //   this._bugIssueTable,
    //   [
    //     {
    //       target: this._featureTable.options,
    //       linkFilter: (record: any) =>
    //        `OR(${record['fields']['Associated Features'].map((af: any) => `RECORD_ID()='${af}'`).join(',')})`,
    //       linkSelector: 'features'
    //     }
    //   ]
    // );

    this.base = this.airtable.build('app7rAIjII1EISWEN');
  }

  private _fetchData(): void {

    this.bugs = this.base
      .pipe(
        table({
          tableId: 'Bugs%20%26%20Issues'
        }),
        select({
          maxRecords: 10
        }),
        execute(),
        tap((response: any) => console.log({ response: response })),
        firstPage()
      );

    this.members = this.base
      .pipe(
        table({
          tableId: 'Team%20Members'
        }),
        select({
          maxRecords: 10
        }),
        execute(),
        tap((response: any) => console.log({ response: response })),
        firstPage()
      );

    this.features = this.base
      .pipe(
        table({
          tableId: 'Features'
        }),
        select({
          maxRecords: 10
        }),
        execute(),
        tap((response: any) => console.log({ response: response })),
        firstPage()
      );

    // this.bugsWithFeatures = this._linkedTable
    //   .select({maxRecords: 10})
    //   .firstPage().pipe(share());
  }
}
