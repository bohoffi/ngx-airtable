```html
<ul>
    <ng-container *ngFor="let bug of bugs | async">
        <li>{{bug.fields.Name}}</li>
    </ng-container>
</ul>
```