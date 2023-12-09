import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundleTransferDetailComponent } from './bundle-transfer-detail.component';

describe('BundleTransferDetailComponent', () => {
  let component: BundleTransferDetailComponent;
  let fixture: ComponentFixture<BundleTransferDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BundleTransferDetailComponent]
    });
    fixture = TestBed.createComponent(BundleTransferDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
