import { TestBed } from '@angular/core/testing';

import { NgxAirtableService } from './ngx-airtable.service';

describe('NgxAirtableService', () => {
  let service: NgxAirtableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxAirtableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
