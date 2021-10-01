import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { MatDialog } from '@angular/material/dialog'

import { GameMechanics } from "../../services/gamemechanics.service"
import { WinDialog } from '../dialogs/windialog/windialog.component';
import { LoseDialog } from '../dialogs/losedialog/losedialog.component';

@Component({
  selector: 'app-passline',
  templateUrl: './passline.component.html',
  styleUrls: ['./passline.component.css']
})
export class PassLine implements OnInit {

  constructor(private _game:GameMechanics, private _router:Router, public dialog:MatDialog) {}

  public message:string = "Place your bet.";
  public credits:number = 0;
  public bet:number = 0

  ngOnInit(): void {
    let check = this._game.checkGameStatus()
    if(check.credits <= 0 || check.game != "passline"){
      this._router.navigate(['/craps'])
    }
    this.credits = check.credits
  }

  roll() {
    let temp = this._game.runPassLine(this.bet)
    
    this.message = temp.message;
    this.bet = 0;
    this.credits = temp.credits

    if (temp.status === "error"){
      return
    }

    if (temp.status === "point") {
      return
    }

    if (temp.status === "win"){
        this.dialog.open(WinDialog, {
            data: {
                payOut: temp.pay,
                credits: this.credits
            }
        })
    }

    if (temp.status === "lost"){
        this.dialog.open(LoseDialog, {
          data: {
            message: temp.message
          }
        })
    }

    if(this.credits < 1) {
      this.dialog.open(LoseDialog, {
          data: {
              message: "You have run out of credits. Thank you for playing."
          }
      })
      this._router.navigate(['/craps'])
    }
  }
}