import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartScreen } from './components/startscreen/startscreen.component';
import { PassLine } from './components/passline/passline.component';

const routes: Routes = [
  {
  path:"craps", component: StartScreen
  },
  {
    path:"craps/passline", component: PassLine
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