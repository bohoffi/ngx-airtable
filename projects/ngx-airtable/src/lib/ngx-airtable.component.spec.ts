import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAirtableComponent } from './ngx-airtable.component';

describe('NgxAirtableComponent', () => {
  let component: NgxAirtableComponent;
  let fixture: ComponentFixture<NgxAirtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxAirtableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAirtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
