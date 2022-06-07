import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-taskdelete-dialog',
  templateUrl: './taskdelete-dialog.component.html',
  styleUrls: ['./taskdelete-dialog.component.scss']
})
export class TaskdeleteDialogComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  closedialog(){
    this.dialog.closeAll();
  }

}
