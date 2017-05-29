import {Component} from '@angular/core';
import {AirtableService} from '../../../lib/src/services/AirtableService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app works!';

  constructor(private _ats: AirtableService) {
    this._ats.get('authors')
      .subscribe(
        (res: any) => console.log('authors: ', res),
        (err: Error) => console.error(err)
      );
  }
}
