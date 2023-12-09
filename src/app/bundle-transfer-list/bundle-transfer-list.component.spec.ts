import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundleTransferListComponent } from './bundle-transfer-list.component';

describe('BundleTransferListComponent', () => {
  let component: BundleTransferListComponent;
  let fixture: ComponentFixture<BundleTransferListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BundleTransferListComponent]
    });
    fixture = TestBed.createComponent(BundleTransferListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
