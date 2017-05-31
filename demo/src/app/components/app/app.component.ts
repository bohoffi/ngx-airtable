import {AfterViewInit, Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/share';

import {Airtable, Base, Table} from 'ngx-airtable';
import {API_KEY} from '../../utils/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit {

  bugs: Observable<any>;
  members: Observable<any>;
  features: Observable<any>;

  private _bugIssueTable: Table;
  private _teamMemberTable: Table;
  private _featureTable: Table;

  constructor(private _airtable: Airtable) {
    this._initAirtable();
  }

  ngAfterViewInit(): void {
    this._fetchData();
  }

  private _initAirtable(): void {
    const base: Base = this._airtable.configure({
      apiKey: API_KEY
    }).base('appFVQvT927XPWPTq');

    this._bugIssueTable = base.table({
      tableId: 'tbla1d3aqDtQqprQs'
    });
    this._teamMemberTable = base.table({
      tableId: 'tblxzWcv0zGOoAVp9'
    });
    this._featureTable = base.table({
      tableId: 'tbl20P6rSvZVdm7L7'
    });
  }

  private _fetchData(): void {
    this.bugs = this._bugIssueTable
      .select({maxRecords: 10})
      .firstPage()
      .map(res => res.records)
      .do(res => console.log('bugs: ', res))
      .share();
    this.members = this._teamMemberTable
      .select({maxRecords: 10})
      .firstPage()
      .map(res => res.records)
      .do(res => console.log('members: ', res))
      .share();
    this.features = this._featureTable
      .select({maxRecords: 10})
      .firstPage()
      .map(res => res.records)
      .do(res => console.log('features: ', res))
      .share();
  }
}
