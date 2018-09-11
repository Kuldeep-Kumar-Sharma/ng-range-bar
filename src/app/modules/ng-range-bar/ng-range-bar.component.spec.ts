import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRangeBarComponent } from './ng-range-bar.component';

describe('NgRangeBarComponent', () => {
  let component: NgRangeBarComponent;
  let fixture: ComponentFixture<NgRangeBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgRangeBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgRangeBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
