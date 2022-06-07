import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
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
    tags: new FormControl(),
    status: new FormControl(),
    taskDescription: new FormControl(null, Validators.required),
    
  })

  constructor(private dialog: MatDialog,
              public dialogRef: MatDialogRef<CreatetaskDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: string) 
              { 
                this.title = data;
              }

  ngOnInit(): void {
    console.log(this.taskManagerFormGroup)
    this.setValue()
  }

  setValue(){
    this.taskManagerFormGroup.setValue ({ 
      taskName: '', tags: '', status: '', taskDescription: ''
    })
  }
  opencreatesaveDialog(){
    const dialog = this.dialog.open(CreateSaveDialogComponent, {
      
    })
  }
  closedialog(){
    this.dialog.closeAll();
  }

}
