import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-update-save-dialog',
  templateUrl: './update-save-dialog.component.html',
  styleUrls: ['./update-save-dialog.component.scss']
})
export class UpdateSaveDialogComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  closedialog(){
    this.dialog.closeAll();
  }

}
