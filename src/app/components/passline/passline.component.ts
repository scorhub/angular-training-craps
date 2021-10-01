import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { MatDialog } from '@angular/material/dialog'

import { GameMechanics } from "../../services/gamemechanics.service"
import { MsgDialog } from '../msgdialog/msgdialog.component';

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
        this.dialog.open(MsgDialog, {
            data: {
              header: "You won!",
              message: "You won "+ temp.pay + " credits. Your credit balance is now " + this.credits + "."
            }
        })
    }

    if (temp.status === "lost"){
      if(temp.credits > 0){
        this.dialog.open(MsgDialog, {
          data: {
            message: temp.message
          }
        })
      }
    }

    if(this.credits < 1) {
      this.dialog.open(MsgDialog, {
          data: {
              header: "Game over",
              message: "You have run out of credits. Thank you for playing."
          }
      })
      this._router.navigate(['/craps'])
    }
  }
}