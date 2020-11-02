/**
 * Created by bohoffi on 01.06.2017.
 */
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Link, SelectParams } from '../interfaces';
import { Table } from '../node-port/table';
import { LinkedQuery } from './LinkedQuery';
import { _extendLinked } from './utils';

export class LinkedTable extends Table {

  static fromTable(origin: Table, links: Link[]): LinkedTable {
    return new LinkedTable(origin, links);
  }

  constructor(private origin: Table, private links: Link[]) {
    super(origin.options, origin.base);
  }

  find(id: string): Observable<any> {
    return super.find(id)
      .pipe(
        map((record: any) => _extendLinked(record, this.links, this.origin.base))
      );
  }

  select(params?: SelectParams): LinkedQuery {
    if (!params) {
      params = {};
    }

    return new LinkedQuery(params, this.origin, this.links);
  }

  create(entityData: any): Observable<any> {
    throw new Error('LinkedTable is not able to create entities');
  }

  update(id: string, entityData: any): Observable<any> {
    throw new Error('LinkedTable is not able to update entities');
  }

  destroy(id: string): Observable<any> {
    throw new Error('LinkedTable is not able to destroy entities');
  }

  replace(id: string, entityData: any): Observable<any> {
    throw new Error('LinkedTable is not able to replace entities');
  }
}
