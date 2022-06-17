import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TaskModel } from '../shared/models/task-model';
import { TaskService } from '../shared/services/task.service';
import { CreatetaskDialogComponent } from './createtask-dialog/createtask-dialog.component';
import { TaskdeleteDialogComponent } from './taskdelete-dialog/taskdelete-dialog.component';
import { TaskupdateDialogComponent } from './taskupdate-dialog/taskupdate-dialog.component';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})
export class TaskManagerComponent implements OnInit {
 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  displayedColumns: string[] = ['taskID', 'taskName', 'tag', 'taskDescription', 'status', 'dateCreated','dateModified' ,'action'];
  dataSource = new MatTableDataSource<TaskModel>();
  //cloneDataSource: TaskModel[] = [];
  searchKey: string = "";

  constructor(private dialog: MatDialog, private ts: TaskService, private cdr: ChangeDetectorRef, private router: Router) { }

 
ngOnInit(): void {
this.populate();
}

populate(): void{
  this.ts.getTaskData().subscribe(data => {
    if(data){
      this.dataSource.data = data;
    }
    
  }) 
}
createDialog(){
  this.router.navigate(['task']);
  // this.dialog.open(CreatetaskDialogComponent, {
  // })
  // .afterClosed().subscribe((data: any) =>{
  //   if(data){ 
  //     console.log(data)
  //     this.ts.getAddTask(data).subscribe(res => {
  //       this.populate();
  //       // this.cd.detectChanges();
  //     })
  //   }
  // })

}

updateDialog(existingTask: TaskModel){
  this.router.navigate(['task', existingTask.taskID]);
  //let foundTaskById = this.searchTaskById(id)
  // this.dialog.open(TaskupdateDialogComponent, {
  //   data: {
  //     task: existingTask
  //   }
  // }).afterClosed().subscribe((data: any) => {
  //   if(data){
  //     this.ts.getUpdateTasK(data, data.taskID).subscribe(res => {
  //       this.populate
  //       this.cdr.detectChanges();
        
  //     })
  //   }
  // })
}

search(event: Event){
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}



ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
  
}
notifyEvent(event: number){
  
  console.log("Value from parent: ", event);

}

deleteDialog(existingTask: TaskModel){
  this.dialog.open(TaskdeleteDialogComponent,{
    data: {
      title: 'Delete',
      task: existingTask
    }
  }).afterClosed().subscribe((data: any) =>{
    if(data){
      this.deleteWithService(data);
    }
  })
}

deleteWithService(data: any){
  this.ts.getDeleteTask(data).subscribe(res => {
    this.populate();
  })
}
}