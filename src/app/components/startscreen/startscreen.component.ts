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

  ngOnInit(): void {
  }

  startGame() {
    this._game.startPassLine();
    this._router.navigate(['/craps/passbets'])
  }
}
