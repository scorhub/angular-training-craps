import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameScreenComponent } from './components/game-screen/game-screen.component';
import { GamescreenComponent } from './components/gamescreen/gamescreen.component';
import { StartscreenComponent } from './components/startscreen/startscreen.component';
import { WindialogComponent } from './components/dialogs/windialog/windialog.component';
import { LosedialogComponent } from './components/dialogs/losedialog/losedialog.component';
import { PasslineComponent } from './components/passline/passline.component';
import { DontpassComponent } from './components/dontpass/dontpass.component';

@NgModule({
  declarations: [
    AppComponent,
    GameScreenComponent,
    GamescreenComponent,
    StartscreenComponent,
    WindialogComponent,
    LosedialogComponent,
    PasslineComponent,
    DontpassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
