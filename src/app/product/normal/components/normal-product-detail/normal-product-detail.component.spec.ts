import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalProductDetailComponent } from './normal-product-detail.component';

describe('NormalProductDetailComponent', () => {
  let component: NormalProductDetailComponent;
  let fixture: ComponentFixture<NormalProductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalProductDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
