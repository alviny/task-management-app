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
  setSelectedTask(task: Task){
    console.log(`Task ${task.title} selected!`);
  }
  setTasks(tasks: Task[]) {
    this.tasks.next(tasks);
  }
}

export interface Task {
  id : number;
  title: string;
  description: string;
  details: string;
  bundleFilename: string;
  owner : string;
  files : FileInfo[]; 
  possibleTargets : Target[];
}
export interface FileInfo {
  filename : string;
  filesize : string; 
}
export interface Target{
  key : string,
  display : string
}

