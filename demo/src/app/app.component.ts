import {AfterViewInit, Component} from '@angular/core';
import 'rxjs/add/operator/share';

import {Airtable} from 'ngx-airtable';
import {API_KEY} from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit {

  title = 'app works!';
  books: any;

  constructor(private _at: Airtable) {
  }

  ngAfterViewInit(): void {

    const base = this._at.configure({
      apiKey: API_KEY,
      endpointUrl: 'https://api.airtable.com',
      apiVersion: 0
    }).base('appXYMa40P0eOmznh');
    const table = base.table({
      tableName: 'books',
      tableId: 'tbl3a0KcbCkY8FK9P'
    });
    this.books = table
      .select({
        sort: [
          {
            field: 'Title',
            direction: 'asc'
          }
        ]
      })
      .all().share();
  }
}
