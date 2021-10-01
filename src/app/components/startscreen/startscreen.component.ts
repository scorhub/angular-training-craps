import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { GameMechanics } from "../../services/gamemechanics.service";

@Component({
  selector: 'app-startscreen',
  templateUrl: './startscreen.component.html',
  styleUrls: ['./startscreen.component.css']
})
export class StartScreen implements OnInit {

  constructor(private _game:GameMechanics, private _router:Router) {}

  public ready:boolean = true
  public name:string = ""
  public player:string = ""
  public credits:number = 0;

  ngOnInit(): void {
    if(this.name.length < 3){
      this.ready = false
    }
    this.credits = this._game.checkGameStatus().credits
  }

  setPlayer(){
    console.log(this.player)
    if(this.player.length < 3){
      window.alert("Name must be at least 3 characters long!")
      return
    }
    this.name = this.player
    this._game.setCredits();
    this.credits = this._game.checkGameStatus().credits
    this.ready = true
  }

  startPassLine() {
    this._game.startPassLine();
    this._router.navigate(['/craps/passline'])
  }

  startDontPass() {
    this._game.startDontPass();
    this._router.navigate(['/craps/dontpass'])
  }
}
