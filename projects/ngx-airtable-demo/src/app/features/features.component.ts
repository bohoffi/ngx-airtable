import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {
  @Input()
  public features: any[];

  public readonly code = 
  `
  this.features = this.base
      .pipe(
        table({
          tableId: 'Features'
        }),
        select({
          maxRecords: 10
        }),
        execute(),
        firstPage()
      );
  `;
}
