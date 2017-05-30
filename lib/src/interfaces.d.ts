/**
 * Created by bohoffi on 29.05.2017.
 */
import { SortDirection } from './types';
export interface SelectParams {
    fields?: string[];
    filterByFormula?: string;
    maxRecords?: number;
    pageSize?: number;
    sort?: {
        field: string;
        direction: SortDirection;
    }[];
    view?: string;
}
