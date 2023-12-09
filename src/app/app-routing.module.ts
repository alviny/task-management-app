// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { BundleTransferListComponent } from './bundle-transfer-list/bundle-transfer-list.component';
import { BundleTransferDetailComponent } from './bundle-transfer-detail/bundle-transfer-detail.component';

const routes: Routes = [
  { path: '', component: TaskListComponent },
  { path: 'task/:id', component: TaskDetailsComponent },
  { path: 'bundle/transfer', component : BundleTransferListComponent},
  { path: 'bundle/transfer/:id', component: BundleTransferDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
