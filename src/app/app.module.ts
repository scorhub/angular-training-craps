import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'
import { MatSliderModule } from '@angular/material/slider'
import { MatDialogModule } from '@angular/material/dialog'

import { GameMechanics } from './services/gamemechanics.service';

import { StartScreen } from './components/startscreen/startscreen.component';
import { WinDialog } from './components/dialogs/windialog/windialog.component';
import { LoseDialog } from './components/dialogs/losedialog/losedialog.component';
import { PassLine } from './components/passline/passline.component';
import { DontpassComponent } from './components/dontpass/dontpass.component';

@NgModule({
  declarations: [
    AppComponent,
    StartScreen,
    WinDialog,
    LoseDialog,
    PassLine,
    DontpassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatSliderModule,
    MatDialogModule
  ],
  providers: [GameMechanics],
  bootstrap: [AppComponent]
})
export class AppModule { }
