import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { Table, Airtable, Base, RunAction, firstPage } from 'ngx-airtable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  bugs: Observable<any>;
  members: Observable<any>;
  features: Observable<any>;
  // bugsWithFeatures: Observable<any>;

  private base: Base;

  private _bugIssueTable: Table;
  private _teamMemberTable: Table;
  private _featureTable: Table;
  // private _linkedTable: LinkedTable;

  constructor(private _airtable: Airtable) {
    this._initAirtable();
  }

  ngOnInit(): void {
    this._fetchData();
  }

  private _initAirtable(): void {
    this.base = this._airtable
      .base('app7rAIjII1EISWEN');

    this._bugIssueTable = this.base.table({
      tableId: 'Bugs%20%26%20Issues'
    });
    this._teamMemberTable = this.base.table({
      tableId: 'Team%20Members'
    });
    this._featureTable = this.base.table({
      tableId: 'Features'
    });
    // this._linkedTable = LinkedTable.fromTable(
    //   this._bugIssueTable,
    //   [
    //     {
    //       target: this._featureTable.options,
    //       linkFilter: (record: any) => `OR(${record['fields']['Associated Features'].map((af: any) => `RECORD_ID()='${af}'`).join(',')})`,
    //       linkSelector: 'features'
    //     }
    //   ]
    // );
  }

  private _fetchData(): void {
    this.bugs = this._airtable.execute(
      RunAction.get(this.base, this._bugIssueTable, {
        maxRecords: 10
      })
    ).pipe(
      firstPage(),
      share()
    );
    this.members = this._airtable.execute(
      RunAction.get(this.base, this._teamMemberTable, {
        maxRecords: 10
      })
    ).pipe(
      firstPage(),
      share()
    );
    this.features = this._airtable.execute(
      RunAction.get(this.base, this._featureTable, {
        maxRecords: 10
      })
    ).pipe(
      firstPage(),
      share()
    );

    // this.bugsWithFeatures = this._linkedTable
    //   .select({maxRecords: 10})
    //   .firstPage().pipe(share());
  }
}
