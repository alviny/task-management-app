import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BundleTransfer } from '../services/bundle-transfer.service';

@Component({
  selector: 'app-bundle-transfer-detail',
  templateUrl: './bundle-transfer-detail.component.html',
  styleUrls: ['./bundle-transfer-detail.component.scss']
})
export class BundleTransferDetailComponent {
  @Input() bundleTransfer: BundleTransfer | null = null;
  @Output() goBackEvent = new EventEmitter<void>();
}
