import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreatetaskDialogComponent } from '../createtask-dialog/createtask-dialog.component';
import { UpdateSaveDialogComponent } from './update-save-dialog/update-save-dialog.component';
@Component({
  selector: 'app-taskupdate-dialog',
  templateUrl: './taskupdate-dialog.component.html',
  styleUrls: ['./taskupdate-dialog.component.scss']
})
export class TaskupdateDialogComponent implements OnInit {
 
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
  }

  closedialog(){
    this.dialog.closeAll();
  }

openupdatesaveDialog(){
    const dialog = this.dialog.open(UpdateSaveDialogComponent, {
      
    })

}
}
