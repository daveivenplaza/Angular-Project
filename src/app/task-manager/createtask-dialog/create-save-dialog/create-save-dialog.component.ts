import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-create-save-dialog',
  templateUrl: './create-save-dialog.component.html',
  styleUrls: ['./create-save-dialog.component.scss']
})
export class CreateSaveDialogComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  closedialog(){
    this.dialog.closeAll();
  }

}
