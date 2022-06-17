import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskManagerComponent } from './task-manager.component';
import { CreatetaskDialogComponent } from './createtask-dialog/createtask-dialog.component';
import { TaskupdateDialogComponent } from './taskupdate-dialog/taskupdate-dialog.component';
import { TaskdeleteDialogComponent } from './taskdelete-dialog/taskdelete-dialog.component';
import { SharedModule } from '../shared/module/shared.module';



@NgModule({
  declarations: [
    TaskManagerComponent,
    CreatetaskDialogComponent,
    TaskupdateDialogComponent,
    TaskdeleteDialogComponent
  ],
  imports: [
    SharedModule
  ]
})
export class TaskManagerModule { }
