import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.less']
})
export class BugsComponent {

  @Input()
  bugs: any[];
}
