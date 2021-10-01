import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

export interface DialogData {
  message: string
}

@Component({
  selector: 'app-losedialog',
  templateUrl: './losedialog.component.html',
  styleUrls: ['./losedialog.component.css']
})
export class LoseDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
