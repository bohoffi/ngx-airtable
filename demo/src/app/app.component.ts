import {AfterViewInit, Component} from '@angular/core';
import 'rxjs/add/operator/share';

import {Airtable, Base, Query, Table} from 'ngx-airtable';
import {API_KEY} from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit {

  books: any;

  constructor(private _at: Airtable) {
  }

  ngAfterViewInit(): void {

    const base: Base = this._at.configure({
      apiKey: API_KEY
    }).base('appXYMa40P0eOmznh');
    const table: Table = base.table({
      tableName: 'books',
      tableId: 'tbl3a0KcbCkY8FK9P'
    });
    const query: Query = table
      .select({
        sort: [
          {
            field: 'Title',
            direction: 'asc'
          }
        ]
      });
    this.books = query.all().share();
  }
}
