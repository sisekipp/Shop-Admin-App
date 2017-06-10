import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialProductDetailComponent } from './special-product-detail.component';

describe('SpecialProductDetailComponent', () => {
  let component: SpecialProductDetailComponent;
  let fixture: ComponentFixture<SpecialProductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialProductDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
