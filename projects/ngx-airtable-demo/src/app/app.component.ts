import { Component, OnInit } from '@angular/core';
import { Airtable, Base, LinkedTable, Table } from 'ngx-airtable';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  bugs: Observable<any>;
  members: Observable<any>;
  features: Observable<any>;
  bugsWithFeatures: Observable<any>;

  private _bugIssueTable: Table;
  private _teamMemberTable: Table;
  private _featureTable: Table;
  private _linkedBugToFeaturesTable: LinkedTable;

  constructor(private _airtable: Airtable) {
    this._initAirtable();
  }

  public ngOnInit(): void {
    this._fetchData();
  }

  private _initAirtable(): void {
    const base: Base = this._airtable
      .base('appDF1y0se11zccJ6');

    this._bugIssueTable = base.table({
      tableId: 'tbl8Lo6hJPnUaFOG8'
    });
    this._teamMemberTable = base.table({
      tableId: 'tblvj7fCjLAS8QifP'
    });
    this._featureTable = base.table({
      tableId: 'tbl0K09ybHTZXCuBN'
    });
    this._linkedBugToFeaturesTable = LinkedTable.fromTable(
      this._bugIssueTable,
      [
        {
          target: this._featureTable.options,
          linkFilter: record => `OR(${record['fields']['Associated features'].map(af => `RECORD_ID()='${af}'`).join(',')})`,
          linkSelector: 'features'
        }
      ]
    );
  }

  private _fetchData(): void {
    this.bugs = this._bugIssueTable
      .select({maxRecords: 10})
      .firstPage()
      .pipe(
        share()
      );
    this.members = this._teamMemberTable
      .select({maxRecords: 10})
      .firstPage()
      .pipe(
        share()
      );
    this.features = this._featureTable
      .select({maxRecords: 10})
      .firstPage()
      .pipe(
        share()
      );

    this.bugsWithFeatures = this._linkedBugToFeaturesTable
      .select({maxRecords: 10})
      .firstPage()
      .pipe(
        share()
      );
  }
}
