// task-list.component.ts
import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../services/task.service';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  displayedColumns: string[] = ['select','title', 'description']; // Remove 'select' column

  selection = new SelectionModel<Task>(true, []); // Enable multi-selection
  selectedTask: Task | null = null;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    // Fetch tasks from your backend or set them manually
    const tasks: Task[] = [
      { id: 1, title: 'Task 1', description: 'Description 1', details: 'Details 1' , owner : 'alviny',bundleFilename:'test.zip',
        files : [
          { filename : 'testdfgdfg.pdf', filesize : '30mb' },
          { filename : 'testdfgdfg.pdf', filesize : '30mb' },
          { filename : 'testdfgdfgdf.pdf', filesize : '30mb' },
          { filename : 'testdfgdfgdfg.pdf', filesize : '30mb' },
          { filename : 'testdfgdfg.pdf', filesize : '30mb' },
          { filename : 'testdfgdfgdfgdfg.pdf', filesize : '30mb' }
      
      ],
        possibleTargets : [ { key : 'qa', display : 'QA'}, { key : 'pe', display : 'Post Edge'}]
      },
      { id : 2, title: 'Task 2', description: 'Description 2', details: 'Details 2', owner : 'alviny',bundleFilename:'test.zip',
        files : [{ filename : 'test2.pdf', filesize : '10kb'}
      ],
        possibleTargets : [ { key : 'qa', display : 'QA'}, { key : 'pe', display : 'Post Edge'}]
      },
      // Add more tasks as needed
    ];

    this.taskService.setTasks(tasks);
    this.taskService.tasks$.subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.tasks.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.tasks.forEach((row) => this.selection.select(row));
  }

  selectTask(task: Task) {
    this.selectedTask = task;
  }

  closeTaskDetails() {
    this.selectedTask = null;
  }

  claimSelectedTasks() {
    // Implement the logic to claim the selected tasks
    const selectedTasks = this.selection.selected;
    console.log('Claiming selected tasks:', selectedTasks);

    // Add your logic to handle the claim action
  }
}
