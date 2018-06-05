/**
 * Created by bohoffi on 02.06.2017.
 */
import {Observable} from 'rxjs';
import {Link, SelectParams} from '../interfaces';
import {_extendLinked} from './utils';
import {Query} from '../node-port/query';
import {Table} from '../node-port/table';
import {map} from 'rxjs/operators';

export class LinkedQuery extends Query {

  constructor(params: SelectParams, private table: Table, private links: Link[]) {
    super(params, table);
  }

  firstPage(): Observable<any> {
    return super.firstPage().pipe(
      map((records: any[]) => {
        return records.map(record => _extendLinked(record, this.links, this.table.base));
      })
    );
  }

  eachPage(): Observable<any> {
    return super.eachPage().pipe(
      map((records: any[]) => records.map(record => _extendLinked(record, this.links, this.table.base)))
    );
  }

  all(): Observable<any> {
    return super.all().pipe(
      map((records: any[]) => records.map(record => _extendLinked(record, this.links, this.table.base)))
    );
  }
}
