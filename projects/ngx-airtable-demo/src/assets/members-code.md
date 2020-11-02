```ts
this.members: Observable<any> = this.base
    .pipe(
        table({
            tableId: 'tblvj7fCjLAS8QifP'
        }),
        select({
            maxRecords: 10
        }),
        execute(),
        firstPage()
    );
```