```ts
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Airtable, table, select, execute, firstPage, Executioner } from 'ngx-airtable';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    private base: Observable<Executioner>;
    public bugs: Observable<any>;
    public members: Observable<any>;
    public features: Observable<any>;

    constructor(
        private readonly airtable: Airtable
        ) {
        this.base = this.airtable.build('<YOUR_BASE_ID>');
    }

    public ngOnInit(): void {
        // see below for fetching data
    }
}
```