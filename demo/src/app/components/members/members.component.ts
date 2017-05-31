import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.less']
})
export class MembersComponent {

  @Input()
  members: any[];
}
