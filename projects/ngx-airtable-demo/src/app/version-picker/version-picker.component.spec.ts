import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionPickerComponent } from './version-picker.component';

describe('VersionPickerComponent', () => {
  let component: VersionPickerComponent;
  let fixture: ComponentFixture<VersionPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersionPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
