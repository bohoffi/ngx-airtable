import { TableOptions } from '../interfaces/table-options';

export class Table {

  constructor(readonly options: TableOptions) {

    if (!this.options.tableName && !this.options.tableId) {
      throw new Error('Table name or table ID is required');
    }
  }

  get urlEncodedNameOrId(): string {
    return this.options.tableId || encodeURIComponent(!!this.options.tableName ? this.options.tableName : '');
  }
}
