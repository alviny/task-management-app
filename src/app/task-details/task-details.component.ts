// task-details.component.ts
import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
  selectedTask: Task | null = null;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.selectedTask$.subscribe((task) => {
      // Set the selected task, e.g., the first task in the list
      if (task) {
        this.selectedTask = task;
      }
    });
  }
}
