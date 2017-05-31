import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialProductOverviewComponent } from './special-product-overview.component';

describe('SpecialProductOverviewComponent', () => {
  let component: SpecialProductOverviewComponent;
  let fixture: ComponentFixture<SpecialProductOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialProductOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialProductOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
