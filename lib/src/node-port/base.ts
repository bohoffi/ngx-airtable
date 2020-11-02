/**
 * Created by bohoffi on 30.05.2017.
 */
import { Airtable } from './airtable';
import { TableOptions } from '../interfaces';
import { Table } from './table';

export class Base {

  private _baseId: string;
  private _airtable: Airtable;

  constructor(baseId: string, airtable: Airtable) {
    if (!baseId) {
      throw new Error('BaseId must be a non-empty string');
    }

    this._baseId = baseId;
    this._airtable = airtable;
  }

  table(tableOptions: TableOptions): Table {
    return new Table(tableOptions, this);
  }

  get baseId(): string {
    return this._baseId;
  }

  get airtable(): Airtable {
    return this._airtable;
  }
}
