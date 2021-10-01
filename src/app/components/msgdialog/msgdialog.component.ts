import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

export interface DialogData {
  header: string,
  message: string
}

@Component({
  selector: 'app-msgdialog',
  templateUrl: './msgdialog.component.html',
  styleUrls: ['./msgdialog.component.css']
})
export class MsgDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
