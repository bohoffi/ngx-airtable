import { Observable } from 'rxjs';
import { Link } from '../interfaces';
// import {_extendLinked} from './utils';
import { Query } from '../node-port/query';
import { Table } from '../node-port/table';
import { map } from 'rxjs/operators';
import { RunAction } from '../node-port/runaction';
import { SelectParams } from '../interfaces/select-params';

export class LinkedQuery extends Query {

  constructor(params: SelectParams, private table: Table, private links: Link[]) {
    super(params, table);
  }

  // firstPage(): RunAction {
  // // firstPage(): Observable<any> {
  //   return super.firstPage().pipe(
  //     map((records: any[]) => {
  //       return records.map(record => _extendLinked(record, this.links));
  //     })
  //   );
  // }

  // eachPage(): Observable<any> {
  //   return super.eachPage().pipe(
  //     map((records: any[]) => records.map(record => _extendLinked(record, this.links)))
  //   );
  // }

  // all(): Observable<any> {
  //   return super.all().pipe(
  //     map((records: any[]) => records.map(record => _extendLinked(record, this.links)))
  //   );
  // }
}
