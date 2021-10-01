import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartScreen } from './components/startscreen/startscreen.component';
import { PassLine } from './components/passline/passline.component';
import { DontPass } from './components/dontpass/dontpass.component';

const routes: Routes = [
  {
  path:"craps", component: StartScreen
  },
  {
    path:"craps/passline", component: PassLine
  },
  {
    path:"craps/dontpass", component: DontPass
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