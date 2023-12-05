// task-details.component.ts
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../task.service';
import { SelectionModel } from '@angular/cdk/collections';
import { FormControl, FormGroup } from '@angular/forms';
import { FileInfo } from '../task.service';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
  @Input() task: Task | null = null;
  @Output() goBackEvent = new EventEmitter<void>();
  displayedColumns: string[] = ['select', 'filename', 'filesize']; // Add more columns as needed
  selection = new SelectionModel<any>(true, []); // Enable multi-selection
  taskDetailsForm: FormGroup; // Define a FormGroup
  selectedFilesControl = new FormControl(); // Move this line inside the component
  displayedFiles: FileInfo[] | undefined = [];
  selectedFilesDataSource = new MatTableDataSource<any>([]); // MatTableDataSource for selected files

  targetEnvironments: string[] = ['QA', 'PROD', 'Others'];
  targetEnvironmentsControl = new FormControl(); 
  
  constructor() {
    // Initialize the FormGroup
    this.taskDetailsForm = new FormGroup({
      selectedFiles: this.selectedFilesControl
    });
  }
  ngOnInit() {
    // Set the initial selected files for display
    this.displayedFiles = this.task?.files;
    this.selectedFilesDataSource.data = [];
  }

  goBack() {
    // Implement go back logic
    this.goBackEvent.emit();
  }

  // Add more methods as needed

  // Select all files
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.task?.files.forEach((row) => this.selection.select(row));
  }

  // Check if all files are selected
  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.task?.files.length || 0;
    return numSelected === numRows;
  }

  // Perform an action on the selected files (e.g., download or delete)
  performActionOnSelectedFiles() {
    const selectedFiles = this.selection.selected;
    console.log('Performing action on selected files:', selectedFiles);

    // Add your logic to handle the action on selected files
  }

  // Handle file selection
  selectFile(file: any) {
    // Add your logic for file selection
  }

  // Add selected files to the displayed files array
  addFiles() {
    const selectedFiles = this.selectedFilesControl.value;
    this.displayedFiles = this.task?.files.filter(file => selectedFiles.includes(file));
    //const selectedFiles = this.targetEnvironmentsControl.value;
    //this.selectedFilesDataSource.data = this.displayedFiles | [];
  }
}
