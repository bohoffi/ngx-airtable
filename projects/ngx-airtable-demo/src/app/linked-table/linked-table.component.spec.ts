import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedTableComponent } from './linked-table.component';

describe('LinkedTableComponent', () => {
  let component: LinkedTableComponent;
  let fixture: ComponentFixture<LinkedTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkedTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
