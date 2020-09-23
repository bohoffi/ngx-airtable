import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent {
  @Input()
  public members: any[];

  public readonly code = 
  `
  this.members = this.base
      .pipe(
        table({
          tableId: 'Team%20Members'
        }),
        select({
          maxRecords: 10
        }),
        execute(),
        firstPage()
      );
  `;
}
