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



import { RatingComponent } from './shared/rating/rating.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskService } from './shared/services/task.service';
import { TagsComponent } from './task-manager/tags/tags.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { TaskManagerModule } from './task-manager/task-manager.module';



@NgModule({
  declarations: [
    AppComponent,
    RatingComponent,
    TagsComponent,
    NotFoundComponent

  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    TaskManagerModule
    
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
