import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-linked-table',
  templateUrl: './linked-table.component.html',
  styleUrls: ['./linked-table.component.less']
})
export class LinkedTableComponent {

  @Input()
  bugsWithFeatures: any[];
}
