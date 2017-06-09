import {AfterViewInit, Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/share';

import {Airtable, Base, LinkedTable, Table} from 'ngx-airtable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit {

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

  ngAfterViewInit(): void {
    this._fetchData();
  }

  private _initAirtable(): void {
    const base: Base = this._airtable
      .base('appFVQvT927XPWPTq');

    this._bugIssueTable = base.table({
      tableId: 'tbla1d3aqDtQqprQs'
    });
    this._teamMemberTable = base.table({
      tableId: 'tblxzWcv0zGOoAVp9'
    });
    this._featureTable = base.table({
      tableId: 'tbl20P6rSvZVdm7L7'
    });
    this._linkedBugToFeaturesTable = LinkedTable.fromTable(
      this._bugIssueTable,
      [
        {
          target: this._featureTable.options,
          linkFilter: record => `OR(${record['fields']['Associated Features'].map(af => `RECORD_ID()='${af}'`).join(',')})`,
          linkSelector: 'features'
        }
      ]
    );
  }

  private _fetchData(): void {
    this.bugs = this._bugIssueTable
      .select({maxRecords: 10})
      .firstPage()
      .share();
    this.members = this._teamMemberTable
      .select({maxRecords: 10})
      .firstPage()
      .share();
    this.features = this._featureTable
      .select({maxRecords: 10})
      .firstPage()
      .share();

    this.bugsWithFeatures = this._linkedBugToFeaturesTable
      .select({maxRecords: 10})
      .firstPage()
      .share();
  }
}
