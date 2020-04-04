import { TableOptions } from '../interfaces/table-options';
import { Table } from './table';

export class Base {

  constructor(readonly baseId: string) {
    if (!this.baseId) {
      throw new Error('BaseId must be a non-empty string');
    }
  }

  public table(tableOptions: TableOptions): Table {
    return new Table(tableOptions);
  }
}
