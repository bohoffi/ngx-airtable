# ngx-airtable

[![npm version](https://badge.fury.io/js/ngx-airtable.svg)](https://badge.fury.io/js/ngx-airtable)
[![Build Status](https://travis-ci.org/bohoffi/ngx-airtable.svg?branch=master)](https://travis-ci.org/bohoffi/ngx-airtable)

An Angular module wrapping the Airtable API

* [Installation](#installation)
* [Usage](#usage)
* [API](#api)
  * [Airtable (Service)](#airtable-service)
  * [Base](#base)
  * [Table](#table)
  * [Query](#query)
<<<<<<< HEAD
  * [AirtableConfiguration](#airtableconfiguration)
=======
>>>>>>> origin/linked-queries
  * [SelectParams](#selectparams)
  * [SortParam](#sortparam)
  * [SortDirection](#sortdirection)

## Installation
Install via npm:
```
npm install ngx-airtable --save
```
or install via yarn
```
yarn add ngx-airtable
```

## Usage
#### Import `NgxAirtableModule`
```ts
import {NgModule} from '@angular/core';
import {NgxAirtableModule} from 'ngx-airtable';

@NgModule({
  imports: [
    NgxAirtableModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

#### Global configuration
If you want to have a global configuration you can provide an option config when importing the module:
```ts
NgxAirtableModule.forRoot({ apiKey: 'YOUR_API_KEY' })
```
The API key is the only configuration value which has to be provided (either globally or by usage (using `configure()`)).
The endpoint url and the api version are provided with the following default values:
* `endpointUrl: 'https://api.airtable.com'` 
* `apiVersion: 0` 

If you want to you can overwrite them (either globally or by usage (using `configure()`).

## API

This module is providing the same functionality as the official Airtable JavaScript Library [airtable.js](https://github.com/Airtable/airtable.js) as of v0.5.0.

### Airtable (Service)
#### Methods
<<<<<<< HEAD
- `configure(opts: AirtableConfiguration): Airtable`: provides the configuration or overrides the global configuration used to connect to the Airtable API
- `base(baseId: string): Base`: creates a new Base instance identified by id

#### Properties
- `options: AirtableConfiguration`: provides an accessor for the options object passed to the configure method

### Base
#### Methods
- `table(tableOpts: TableOptions): Table`: creates a new Table instance identified by name or id
=======
>>>>>>> origin/linked-queries

#### Properties
- `baseId: string`: provides an accessor for the Base's id
- `airtable: Airtable`: provides an accessor for the overlaying Airtable instance

### Table
#### Methods
- `find(id: string): Observable<any>`: fetches a record identified by id
- `select(params?: SelectParams): Query`: creates a new Query instance with the given parameters
- `create(entityData: any): Observable<any>`: creates a new entity
- `update(id: string, entityData: any): Observable<any>`: updated an entity identified by id with the given data
- `destroy(id: string): Observable<any>`: deletes an entity identified by id
- `replace(id: string, entityData: any): Observable<any>`: replaces an entity identified by id with the given data

#### Properties
- `base: Base`: provides an accessor for the overlaying Base instance
- `urlEncodedNameOrId: string`: provides an accessor for the url-friendly encoded Table name or id

### Query
#### Methods
- `firstPage(): Observable<any>`: fetches the first page (if `pageSize` is omitted => max. 100 records)
- `eachPage(): Observable<any>`: fetches each page (all records __but__ each page is emitted separately)
- `all(): Observable<any>`: fetches all pages and emits all records at once

<<<<<<< HEAD
### AirtableConfiguration
- `apiKey?: string`: provides the API key to access Airtable
- `endpointUrl?: string`: the API endpoint to hit. You might want to override it if you are using an API proxy (e.g. runscope.net) to debug your API calls
- `apiVersion?: number`: the API version

=======
>>>>>>> origin/linked-queries
### SelectParams
- `fields?: string[]`: limits the fetched fields per record
- `filterByFormula?: string`: a [formula](https://support.airtable.com/hc/en-us/articles/203255215-Formula-Field-Reference) used to filter the records
- `maxRecords?: number`: limits the maximum record count
- `pageSize?: number`: The number of records returned in each request. Must be less than or equal to 100. Default is 100.
- `sort?: SortParam[]`: specifying sorting rules by field and direction
- `view?: string`: the name or id of the view to fetch

<<<<<<< HEAD
### SortParam
- `field: string`: the name of the field to sort
- `direction: SortDirection`: the direction to sort

=======
>>>>>>> origin/linked-queries
### SortDirection
- `type SortDirection = 'asc' | 'desc'`
