import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { CreatetaskDialogComponent } from './task-manager/createtask-dialog/createtask-dialog.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { TaskupdateDialogComponent } from './task-manager/taskupdate-dialog/taskupdate-dialog.component';

const routes: Routes = [
  
    {path: '', component: TaskManagerComponent},
    {path: 'task', component: CreatetaskDialogComponent},
    {path: 'task/:id', component: TaskupdateDialogComponent},
    {path: 'login', component: LoginComponent},
    {path: '**' , component: NotFoundComponent}
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
