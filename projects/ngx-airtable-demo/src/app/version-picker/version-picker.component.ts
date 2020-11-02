import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Version, VERSIONS } from '../versions';

@Component({
  selector: 'app-version-picker',
  templateUrl: './version-picker.component.html',
  styleUrls: ['./version-picker.component.scss']
})
export class VersionPickerComponent {

  public readonly currentVersion = VERSIONS.find(version => version.current);

  public versions = VERSIONS;

  constructor(private readonly router: Router) { }

  public onVersionChanged(version: Version) {
    this.router.navigate(version.route);
  }
}
