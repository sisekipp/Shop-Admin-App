import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalProductOverviewComponent } from './normal-product-overview.component';

describe('NormalProductOverviewComponent', () => {
  let component: NormalProductOverviewComponent;
  let fixture: ComponentFixture<NormalProductOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalProductOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalProductOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
