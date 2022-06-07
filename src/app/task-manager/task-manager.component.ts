import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CreatetaskDialogComponent } from './createtask-dialog/createtask-dialog.component';
import { TaskdeleteDialogComponent } from './taskdelete-dialog/taskdelete-dialog.component';
import { TaskupdateDialogComponent } from './taskupdate-dialog/taskupdate-dialog.component';
@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})
export class TaskManagerComponent implements OnInit {
 
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  
  constructor(private dialog: MatDialog) { }

 
  ngOnInit(): void {
  }
  displayedColumns: string[] = ['taskid', 'taskname', 'completionrating', 'taskdescription', 'status', 'datecreated','datemodified' , 'datecompleted' ,'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

openDialog(){
    const dialog = this.dialog.open(TaskdeleteDialogComponent, {
      
    })
}
openupdateDialog(){
  const dialog = this.dialog.open(TaskupdateDialogComponent, {
    
  })
}
opencreateDialog(){
  const dialog = this.dialog.open(CreatetaskDialogComponent, {
    
  })

}
search(event: Event){
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
}

}

export interface PeriodicElement {
  taskid: number;
  taskname: string;
  completionrating: number;
  taskdescription: string;
  status: string;
  datecreated: Date;
  datemodified: string;
  datecompleted: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {taskid: 1, taskname: 'Washing', completionrating: 5, taskdescription: 'Wash Dishes', status: 'Completed', datecreated: new Date, datemodified:'05/09/2022', datecompleted:'05/10/2022'},
  {taskid: 2, taskname: 'Reading', completionrating: 2, taskdescription: 'Read Manga', status: 'In Progress', datecreated:new Date, datemodified:'05/09/2022', datecompleted:'05/10/2022'},
  {taskid: 3, taskname: 'Coding', completionrating: 3, taskdescription: 'Code Angular', status: 'New', datecreated:new Date, datemodified:'05/13/2022', datecompleted:'05/26/2022'},
  {taskid: 4, taskname: 'Playing', completionrating: 4, taskdescription: 'Play ML', status: 'New', datecreated:new Date, datemodified:'05/21/2022', datecompleted:'05/27/2022'},
  {taskid: 5, taskname: 'Washing', completionrating: 5, taskdescription: 'Wash Dishes', status: 'Completed', datecreated:new Date, datemodified:'05/09/2022', datecompleted:'05/10/2022'},
  {taskid: 6, taskname: 'Reading', completionrating: 1, taskdescription: 'Read Manga', status: 'In Progress', datecreated:new Date, datemodified:'05/09/2022', datecompleted:'05/10/2022'},
  {taskid: 7, taskname: 'Coding', completionrating: 3, taskdescription: 'Code Angular', status: 'New', datecreated:new Date, datemodified:'05/13/2022', datecompleted:'05/26/2022'},
  {taskid: 8, taskname: 'Playing', completionrating: 5, taskdescription: 'Play ML', status: 'New', datecreated:new Date, datemodified:'05/21/2022', datecompleted:'05/27/2022'},
  {taskid: 9, taskname: 'Coding', completionrating: 4, taskdescription: 'Code Angular', status: 'New', datecreated:new Date, datemodified:'05/13/2022', datecompleted:'05/26/2022'},
  {taskid: 10, taskname: 'Playing', completionrating: 5, taskdescription: 'Play ML', status: 'New', datecreated:new Date, datemodified:'05/21/2022', datecompleted:'05/27/2022'},

];
