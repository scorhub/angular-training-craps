import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { MatDialog } from '@angular/material/dialog'

import { GameMechanics } from "../../services/gamemechanics.service"
import { MsgDialog } from '../msgdialog/msgdialog.component';

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

  back(){
    this._router.navigate(['/craps'])
  }

  roll() {
    let temp = this._game.runDontPass(this.bet)
    
    this.message = temp.message;
    this.bet = 0;
    this.credits = temp.credits

    if (temp.status === "error"){
      return
    }
    
    if(this.canBet){
    this.canBet = false
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
        this.canBet = true
    }

    if (temp.status === "lost"){
      if(temp.credits > 0){
        this.dialog.open(MsgDialog, {
          data: {
            header: "You lost",
            message: temp.message
          }
        })
      }
      this.canBet = true
    }

    if (temp.status === "push"){
        this.dialog.open(MsgDialog, {
            data: {
                header: "You pushed",
                message: temp.message
            }
        })
        this.canBet = true
    }

    if(this.credits < 1) {
      this.dialog.open(MsgDialog, {
          data: {
              header: "Game over",
              message: temp.message + "\n" + "You have run out of credits. Thank you for playing."
          }
      })
      this._router.navigate(['/craps'])
    }
  }
}