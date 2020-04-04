import { TableOptions } from './interfaces/table-options';

export interface Link {
  target: TableOptions;
  linkSelector: string;
  linkFilter: (record: any) => string;
}
