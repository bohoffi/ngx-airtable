import { SortParam } from './sort-param';
import { CellFormat } from '../types/cell-format';

export interface SelectParams {
    /**
     * Only data for fields whose names are in this list will be included in the result.
     * If you don't need every field, you can use this parameter to reduce the amount of data transferred.
     *
     * For example, to only return data from Name and Admin ID, pass in:
     * fields: ['Name', 'Admin ID']
     */
    fields?: string[];
    /**
     * A formula used to filter records. The formula will be evaluated for each record,
     * and if the result is not 0, false, "", NaN, [], or #Error! the record will be included in the response.
     *
     * If combined with the view parameter, only records in that view which satisfy the formula will be returned.
     *
     * For example, to only include records where Name isn't empty, pass in NOT({Name} = '') as a parameter like this:
     * filterByFormula: "NOT({Name} = '')"
     *
     * [Formula doc]{@link https://support.airtable.com/hc/en-us/articles/203255215-Formula-Field-Reference}
     */
    filterByFormula?: string;
    /**
     * The maximum total number of records that will be returned in your requests.
     * If this value is larger than pageSize (which is 100 by default),
     * you may have to load multiple pages to reach this total.
     */
    maxRecords?: number;
    /**
     * The number of records returned in each request. Must be less than or equal to 100.
     *
     * Default is 100.
     */
    pageSize?: number;
    /**
     * A list of sort objects that specifies how the records will be ordered.
     * Each sort object must have a field key specifying the name of the field to sort on,
     * and an optional direction key that is either "asc" or "desc". The default direction is "asc".
     *
     * The sort parameter overrides the sorting of the view specified in the view parameter.
     * If neither the sort nor the view parameter is included, the order of records is arbitrary.
     *
     * For example, to sort records by Name in descending order, pass in:
     * { field: 'Name', direction: 'desc' }
     */
    sort?: SortParam[];
    /**
     * The name or ID of a view in thetable. If set, only the records in that view will be returned.
     * The records will be sorted according to the order of the view unless the sort parameter is included,
     * which overrides that order. Fields hidden in this view will be returned in the results.
     * To only return a subset of fields, use the fields parameter.
     */
    view?: string;
    /**
     * The format that should be used for cell values. Supported values are:
     *
     * json: cells will be formatted as JSON, depending on the field type.
     *
     * string: cells will be formatted as user-facing strings, regardless of the field type.
     * Note: You should not rely on the format of these strings, as it is subject to change.
     *
     * The default is json.
     */
    cellFormat?: CellFormat;
    /**
     * The time zone that should be used to format dates when using string as the cellFormat.
     * This parameter is required when using string as the cellFormat.
     *
     * [Supported timezones]{@link https://support.airtable.com/hc/en-us/articles/216141558-Supported-timezones-for-SET-TIMEZONE}
     */
    timezone?: string;
    /**
     * The user locale that should be used to format dates when using string as the cellFormat.
     * This parameter is required when using string as the cellFormat.
     *
     * [Supported locales]{@link https://support.airtable.com/hc/en-us/articles/220340268-Supported-locale-modifiers-for-SET-LOCALE}
     */
    userLocale?: string;
}
