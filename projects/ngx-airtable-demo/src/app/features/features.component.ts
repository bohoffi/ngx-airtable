import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.less']
})
export class FeaturesComponent {

  @Input()
  features: any[];
}
