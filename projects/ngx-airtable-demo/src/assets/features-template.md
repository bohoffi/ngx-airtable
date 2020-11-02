```html
<ul>
    <ng-container *ngFor="let feature of features | async">
        <li>{{feature.fields.Feature}}</li>
    </ng-container>
</ul>
```