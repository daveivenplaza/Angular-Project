import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 

import { TaskManagerComponent } from './task-manager/task-manager.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { TaskdeleteDialogComponent } from './task-manager/taskdelete-dialog/taskdelete-dialog.component';
import { CreatetaskDialogComponent } from './task-manager/createtask-dialog/createtask-dialog.component';
import { TaskupdateDialogComponent } from './task-manager/taskupdate-dialog/taskupdate-dialog.component';
import { UpdateSaveDialogComponent } from './task-manager/taskupdate-dialog/update-save-dialog/update-save-dialog.component';

import { TagsComponent } from './task-manager/tags/tags.component';
import { RatingComponent } from './shared/rating/rating.component';



@NgModule({
  declarations: [
    AppComponent,
    TaskManagerComponent,
    TaskdeleteDialogComponent,
    CreatetaskDialogComponent,
    TaskupdateDialogComponent,
    UpdateSaveDialogComponent,
    TagsComponent,
    RatingComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
