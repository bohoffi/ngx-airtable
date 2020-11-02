```html
<ul>
    <ng-container *ngFor="let member of members | async">
        <li>{{member.fields.Name}}</li>
    </ng-container>
</ul>
```