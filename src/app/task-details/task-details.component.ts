// task-details.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent {
  @Input() task: Task | null = null;
  @Output() goBackEvent = new EventEmitter<void>();

  goBack() {
    this.goBackEvent.emit();
  }
}
