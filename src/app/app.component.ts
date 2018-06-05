import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {LinkedTable} from '../../projects/ngx-airtable/src/lib/reactive/LinkedTable';
import {Table} from '../../projects/ngx-airtable/src/lib/node-port/table';
import {share} from 'rxjs/operators';
import {Base} from '../../projects/ngx-airtable/src/lib/node-port/base';
import {Airtable} from '../../projects/ngx-airtable/src/lib/node-port/airtable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  bugs: Observable<any>;
  members: Observable<any>;
  features: Observable<any>;
  bugsWithFeatures: Observable<any>;

  private _bugIssueTable: Table;
  private _teamMemberTable: Table;
  private _featureTable: Table;
  private _linkedTable: LinkedTable;

  constructor(private _airtable: Airtable) {
    this._initAirtable();
  }

  ngOnInit(): void {
    this._fetchData();
  }

  private _initAirtable(): void {
    const base: Base = this._airtable
      .base('app7rAIjII1EISWEN');

    this._bugIssueTable = base.table({
      tableId: 'Bugs%20%26%20Issues'
    });
    this._teamMemberTable = base.table({
      tableId: 'Team%20Members'
    });
    this._featureTable = base.table({
      tableId: 'Features'
    });
    this._linkedTable = LinkedTable.fromTable(
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
      .firstPage().pipe(share());
    this.members = this._teamMemberTable
      .select({maxRecords: 10})
      .firstPage().pipe(share());
    this.features = this._featureTable
      .select({maxRecords: 10})
      .firstPage().pipe(share());

    this.bugsWithFeatures = this._linkedTable
      .select({maxRecords: 10})
      .firstPage().pipe(share());
  }
}
