import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/shared/services/task.service';
import { CreateSaveDialogComponent } from './create-save-dialog/create-save-dialog.component';

@Component({
  selector: 'app-createtask-dialog',
  templateUrl: './createtask-dialog.component.html',
  styleUrls: ['./createtask-dialog.component.scss']
})
export class CreatetaskDialogComponent implements OnInit {

  title: string='';
  taskManagerFormGroup = new FormGroup({
    taskName: new FormControl(null, Validators.required),  
    taskDescription: new FormControl(null, Validators.required),
    status: new FormControl(0),
    tag: new FormControl([])
  })

constructor(private ts: TaskService, private router: Router) {}
  // constructor(private dialog: MatDialog,
  //             public dialogRef: MatDialogRef<CreatetaskDialogComponent>,) {}

  ngOnInit(): void {
    console.log(this.taskManagerFormGroup)
    
  }


  opencreatesaveDialog(){
     let task = this.taskManagerFormGroup.value;
     
    let tagsData = this.taskManagerFormGroup.controls['tag'].value as [];
    let tag = [];
    tag.push({"name": tagsData});
    task.tag = tag;
    // let tagData = this.taskManagerFormGroup.controls['tag'].value as [];
    // let tag = [];
    // tag.push({"name": tagData});
    // task.tag = tag;

    // const dialog = this.dialog.open(CreateSaveDialogComponent, {
    // })  
    // this.closedialog(task)
    console.log('task-- ',task)
         this.ts.getAddTask(task).subscribe(res => {
          this.router.navigate(['/']);
         })
  }

  closedialog(){
    // this.dialogRef.close(data);
    this.router.navigate(['/']);
  }

}
