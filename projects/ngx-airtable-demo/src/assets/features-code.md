```ts
this.features: Observable<any> = this.base
    .pipe(
        table({
            tableId: 'tbl0K09ybHTZXCuBN'
        }),
        select({
            maxRecords: 10
        }),
        execute(),
        firstPage()
    );
```