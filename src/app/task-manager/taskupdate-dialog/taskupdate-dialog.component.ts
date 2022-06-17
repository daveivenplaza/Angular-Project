import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { DialogParams, TaskModel } from 'src/app/shared/models/task-model';
import { TaskService } from 'src/app/shared/services/task.service';
import { CreatetaskDialogComponent } from '../createtask-dialog/createtask-dialog.component';
@Component({
  selector: 'app-taskupdate-dialog',
  templateUrl: './taskupdate-dialog.component.html',
  styleUrls: ['./taskupdate-dialog.component.scss']
})
export class TaskupdateDialogComponent implements OnInit {

  title: string='';
  existingTaskToBeEdited: TaskModel;
   
  taskManagerFormGroup = new FormGroup({
    taskID: new FormControl(null),
    taskName: new FormControl(null, Validators.required),
    taskDescription: new FormControl(null, Validators.required),
    status: new FormControl(null, Validators.required),
    tag: new FormControl([]),
    dateCreated: new FormControl(null),
    dateModified: new FormControl(Date.now())
  })
  

constructor(private ts: TaskService, private route: ActivatedRoute, private router: Router) { }
   // existingTaskToBeEdited: TaskModel;
    // constructor(private dialog: MatDialog,
    //             public dialogRef: MatDialogRef<TaskupdateDialogComponent>,
    //             @Inject(MAT_DIALOG_DATA) public data: DialogParams)
    //               {
    //                  this.existingTaskToBeEdited = data.task;
    //               }

  ngOnInit(): void {
    this.ts.getTaskById(this.route.snapshot.paramMap.get('id')).subscribe(res => {
      this.setValues(res) 
    })
  }

  closedialog(){
    // this.dialog.closeAll();
    this.router.navigate(['/']);
  }

  setValues(value: any){
    console.log('value--', value)
    this.taskManagerFormGroup.controls['taskID'].setValue(value.taskID);
    this.taskManagerFormGroup.controls['taskName'].setValue(value.taskName);
    this.taskManagerFormGroup.controls['taskDescription'].setValue(value.taskDescription);
    this.taskManagerFormGroup.controls['status'].setValue(value.status);
    this.taskManagerFormGroup.controls['tag'].setValue(value.tag);
    this.taskManagerFormGroup.controls['dateCreated'].setValue(value.dateCreated);
    this.taskManagerFormGroup.controls['dateModified'].setValue(value.dateModified);
    console.log('Task Manager Form Group-- ', this.taskManagerFormGroup.value);
  }

openupdatesaveDialog(){
  // let id = this.existingTaskToBeEdited.taskID;
  this.ts.getUpdateTasK(this.taskManagerFormGroup.value, this.route.snapshot.paramMap.get('id')) 
  .subscribe(res => {
    this.router.navigate(['/']) 
  })

  //  this.existingTaskToBeEdited.taskName = this.taskManagerFormGroup.controls['taskName'].value;
  //  this.existingTaskToBeEdited.taskDescription = this.taskManagerFormGroup.controls['taskDescription'].value;
  //  this.existingTaskToBeEdited.status = this.taskManagerFormGroup.controls['status'].value;
  //  console.log('taskManagerFormGroup--', this.taskManagerFormGroup.value)
  //  console.log('existingTaskToBeEdited--', this.existingTaskToBeEdited)
   this.cancel(this.existingTaskToBeEdited);
  

}

cancel(data?: any){
  // this.dialogRef.close(data);
}

}
