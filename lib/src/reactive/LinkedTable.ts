/**
 * Created by bohoffi on 01.06.2017.
 */
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';

import {TableOptions} from '../interfaces';
import {Airtable} from '../node-port/airtable';
import {Record} from '../node-port/record';
import {Table} from '../node-port/table';

interface Link {
  target: TableOptions;
  linkSelector: string;
  linkFilter: (record: any, linked: any) => boolean;
}

export class LinkedTable extends Table {

  static test(): void {
    const base = new Airtable(null)
      .base('');

    const table = base.table({
      tableName: ''
    });

    const linkedTable = LinkedTable.fromTable(table, [
      {
        target: {tableName: ''},
        linkSelector: 'link',
        linkFilter: (record, linked) => linked.name === record.link
      }
    ]);
  }

  static fromTable(origin: Table, links: Link[]): LinkedTable {
    return new LinkedTable(origin, links);
  }

  constructor(origin: Table, private links: Link[]) {
    super(origin.options, origin.base);
  }

  find(id: string): Observable<any> {
    return new Record(id, this)
      .fetch()
      .map((record: any) => {

        this.links.forEach((link: Link) => {
          record[link.linkSelector] = this._base
            .table(link.target)
            .select()
            .all()
            .filter(linked => link.linkFilter(record, linked));
        });

        return record;
      });
  }
}
