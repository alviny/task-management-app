// task.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = new BehaviorSubject<Task[]>([]);
  private selectedTask = new BehaviorSubject<Task | null>(null);
  tasks$ = this.tasks.asObservable();
  selectedTask$ = this.selectedTask.asObservable();

  claimTask(task: Task) {
    // Implement your logic to handle task claiming
    console.log(`Task ${task.title} claimed!`);
    this.selectedTask.next(task);
  }

  setTasks(tasks: Task[]) {
    this.tasks.next(tasks);
  }
}

export interface Task {
  title: string;
  description: string;
  details: string;
}

