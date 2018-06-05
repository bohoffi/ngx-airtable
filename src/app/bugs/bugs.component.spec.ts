import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugsComponent } from './bugs.component';

describe('BugsComponent', () => {
  let component: BugsComponent;
  let fixture: ComponentFixture<BugsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
