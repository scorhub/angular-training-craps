import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

export interface DialogData {
  payOut: number,
  credits: number
}

@Component({
  selector: 'app-windialog',
  templateUrl: './windialog.component.html',
  styleUrls: ['./windialog.component.css']
})

export class WinDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}