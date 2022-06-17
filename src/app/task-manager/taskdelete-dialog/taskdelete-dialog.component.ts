import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogParams, TaskModel } from 'src/app/shared/models/task-model';
import { CreatetaskDialogComponent } from '../createtask-dialog/createtask-dialog.component';

@Component({
  selector: 'app-taskdelete-dialog',
  templateUrl: './taskdelete-dialog.component.html',
  styleUrls: ['./taskdelete-dialog.component.scss']
})
export class TaskdeleteDialogComponent implements OnInit {

  title: string = '';
  existingTask: TaskModel; 

  constructor(private dialog: MatDialog,
              public dialogRef: MatDialogRef<TaskdeleteDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogParams) 
              { 
                this.title = data.title;
                this.existingTask = data.task;
              }

  ngOnInit(): void {
  }
  
  
  okDialog(){
    let taskData = this.existingTask.taskID;
    console.log('taskData--', taskData)
    this.noDialog(taskData) 
  }
  
  
  noDialog(data?: any){
    this.dialogRef.close(data);
  }

}
