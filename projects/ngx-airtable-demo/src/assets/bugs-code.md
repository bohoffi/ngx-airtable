```ts
this.bugs: Observable<any> = this.base
    .pipe(
        table({
            tableId: 'tbl8Lo6hJPnUaFOG8'
        }),
        select({
          maxRecords: 10
        }),
        execute(),
        firstPage()
    );
```