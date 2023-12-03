// task-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Task, TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    // Fetch tasks from your backend or set them manually
    const tasks: Task[] = [
      { title: 'Task 1', description: 'Description 1', details: 'Details 1' },
      { title: 'Task 2', description: 'Description 2', details: 'Details 2' },
      // Add more tasks as needed
    ];

    this.taskService.setTasks(tasks);
    this.taskService.tasks$.subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  claimTask(task: Task) {
    this.taskService.claimTask(task);
  }
}

