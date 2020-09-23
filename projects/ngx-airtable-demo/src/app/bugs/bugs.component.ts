import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.scss']
})
export class BugsComponent {
  @Input()
  public bugs: any[];

  public readonly code =
  `
  this.bugs = this.base
      .pipe(
        table({
          tableId: 'Bugs%20%26%20Issues'
        }),
        select({
          maxRecords: 10
        }),
        execute(),
        firstPage()
      );
  `;

  public readonly template = 
  `
  <ul>
    <ng-container
      *ngFor="let bug of bugs | async">
      <li>{{bug.fields.Name}}</li>
    </ng-container>
  </ul>
  `;
}
