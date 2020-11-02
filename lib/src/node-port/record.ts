/**
 * Created by bohoffi on 30.05.2017.
 */
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RunAction } from './runaction';
import { Table } from './table';

export class Record {

  private _id: string;
  private _table: Table;

  constructor(id: string, table: Table) {
    this._id = id;
    this._table = table;
  }

  fetch(): Observable<any> {
    return new RunAction({
      base: this._table.base,
      method: 'GET',
      path: `${this._table.urlEncodedNameOrId}/${this._id}`,
      params: new HttpParams({
        fromObject: {
          api_key: this._table.base.airtable.options.apiKey
        }
      })
    }).perform();
  }

  patchUpdate(entityData: any): Observable<any> {
    return new RunAction({
      base: this._table.base,
      method: 'PATCH',
      path: `${this._table.urlEncodedNameOrId}/${this._id}`,
      params: new HttpParams({
        fromObject: {
          api_key: this._table.base.airtable.options.apiKey
        }
      }),
      body: entityData
    })
      .perform();
  }

  putUpdate(entityData: any): Observable<any> {
    return new RunAction({
      base: this._table.base,
      method: 'PUT',
      path: `${this._table.urlEncodedNameOrId}/${this._id}`,
      params: new HttpParams({
        fromObject: {
          api_key: this._table.base.airtable.options.apiKey
        }
      }),
      body: entityData
    })
      .perform();
  }

  destroy(): Observable<any> {
    return new RunAction({
      base: this._table.base,
      method: 'DELETE',
      path: `${this._table.urlEncodedNameOrId}/${this._id}`,
      params: new HttpParams({
        fromObject: {
          api_key: this._table.base.airtable.options.apiKey
        }
      })
    })
      .perform();
  }
}
