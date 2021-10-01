import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartScreen } from './components/startscreen/startscreen.component';
import { GameScreen } from './components/gamescreen/gamescreen.component';

const routes: Routes = [
  {
  path:"craps", component: StartScreen
  },
  {
    path:"craps/passbets", component: GameScreen
  },
  {
    path:"", redirectTo:"craps", pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }