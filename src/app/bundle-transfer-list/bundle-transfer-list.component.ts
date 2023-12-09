import { Component, OnInit} from '@angular/core';
import { BundleTransferService, BundleTransfer } from '../services/bundle-transfer.service'; 
import { SelectionModel } from '@angular/cdk/collections';
@Component({
  selector: 'app-bundle-transfer-list',
  templateUrl: './bundle-transfer-list.component.html',
  styleUrls: ['./bundle-transfer-list.component.scss']
})
export class BundleTransferListComponent {
  bundleTransfers: BundleTransfer[] = [];
  displayedColumns: string[] = ['select','taskId','customerCode','bundleName','status']; // Remove 'select' column

  selection = new SelectionModel<BundleTransfer>(true, []); // Enable multi-selection
  selectedBundleTransfer: BundleTransfer | null = null;

  constructor(private bundleTransferService: BundleTransferService) {}

  ngOnInit(): void {
    // Fetch bundleTransfers from your backend or set them manually
    this.bundleTransferService.getBundleTransfers().subscribe((bundleTransfers) => {
      this.bundleTransfers = bundleTransfers;
      console.log('bundle transfers', this.bundleTransfers);
    });
  }

  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.bundleTransfers.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.bundleTransfers.forEach((row) => this.selection.select(row));
  }

  selectBundleTransfer(bundleTransfer: BundleTransfer) {
    this.selectedBundleTransfer = bundleTransfer;
  }

  closeBundleTransferDetails() {
    this.selectedBundleTransfer = null;
  }

  claimSelectedBundleTransfer() {
    // Implement the logic to claim the selected bundleTransfers
    const selectedBundleTransfers = this.selection.selected;
    console.log('Claiming selected bundleTransfers:', selectedBundleTransfers);

    // Add your logic to handle the claim action
  }
}
