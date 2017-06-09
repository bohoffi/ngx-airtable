/**
 * Created by bohoffi on 02.06.2017.
 */
import {Query} from '../node-port/query';
import {Link, SelectParams} from '../interfaces';
import {Table} from '../node-port/table';
import {Observable} from 'rxjs/Observable';
import {_extendLinked} from './utils';

export class LinkedQuery extends Query {

  constructor(params: SelectParams, private table: Table, private links: Link[]) {
    super(params, table);
  }

  firstPage(): Observable<any> {
    return super.firstPage()
      .map((records: any[]) => records.map(record => _extendLinked(record, this.links, this.table.base)));
  }

  eachPage(): Observable<any> {
    return super.eachPage()
      .map((records: any[]) => records.map(record => _extendLinked(record, this.links, this.table.base)));
  }

  all(): Observable<any> {
    return super.all()
      .map((records: any[]) => records.map(record => _extendLinked(record, this.links, this.table.base)));
  }
}
