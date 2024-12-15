import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayHoldComponent } from './pay-hold.component';

describe('PayHoldComponent', () => {
  let component: PayHoldComponent;
  let fixture: ComponentFixture<PayHoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayHoldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayHoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
