import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { MatDialog } from '@angular/material/dialog'

import { GameMechanics } from "../../services/gamemechanics.service"
import { WinDialog } from '../dialogs/windialog/windialog.component';
import { LoseDialog } from '../dialogs/losedialog/losedialog.component';

@Component({
  selector: 'app-dontpass',
  templateUrl: './dontpass.component.html',
  styleUrls: ['./dontpass.component.css']
})
export class DontPass implements OnInit {

  constructor(private _game:GameMechanics, private _router:Router, public dialog:MatDialog) {}

  public message:string = "Place your bet.";
  public credits:number = 0;
  public bet:number = 0
  public canBet:boolean = true

  ngOnInit(): void {
    let check = this._game.checkGameStatus()
    if(check.credits <= 0 || check.game != "dontpass"){
      this._router.navigate(['/craps'])
    }
    this.credits = check.credits
  }

  roll() {
    if (this.canBet) {
      this.canBet = false
    }
    let temp = this._game.runDontPass(this.bet)
    
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
        this.canBet = true
    }

    if (temp.status === "lost"){
        this.dialog.open(LoseDialog, {
            data: {
                credits: this.credits
            }
        })
        this.canBet = true
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